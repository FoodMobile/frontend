import axios from 'axios'
import screenNames from '../../screenNames'

function checkFinancial(thisVar) {
    const  financial = thisVar.state.financial
    let noErrors = true;
    let errorValuesToUpdate = {}

    //Check EIN
    const einTest = thisVar.regexList.ein.test(financial.ein)
    if(!einTest) {
        errorValuesToUpdate.ein = true
        //thisVar.updateError({ein:true})
        noErrors = false
    }

    //Check statecode
    const stateCodeTest = thisVar.regexList.stateCode.test(financial.stateCode)
    if(!stateCodeTest) {
        errorValuesToUpdate.stateCode = true
        //thisVar.updateError({stateCode:true})
        noErrors = false
    }

    //Check country code
    const countryTest = thisVar.regexList.country.test(financial.country)
    if(!countryTest) {
        errorValuesToUpdate.country = true
        noErrors = false
    }


    if(financial.companyName.length === 0) {
        errorValuesToUpdate.companyName = true
        noErrors = false
    }

    //if no errors
    if(noErrors) {
        return true

    } else {
        this.updateError({...errorValuesToUpdate})
        return false
    }

   
}

async function submitedFinancialInfo(thisVar) {
    const financial = thisVar.state.financial
    let payload = new URLSearchParams();
    payload.append("ein",financial.ein)
    payload.append("stateCode",financial.stateCode)
    payload.append("country",financial.country)

    try {
        const res = await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.createFinancial}`, payload)
        return res.data
    } catch(error) {
        console.log(error);
        alert(error)
        return {}
    }
}

function checkGenre(thisVar) {
    if(thisVar.state.dietary.genre.length < 1) {
        thisVar.updateError({genre:true})
        return false
    } else {
       return true
    }
}

async function submitGenreInfo(thisVar) {
    let payload = new URLSearchParams();
    payload.append("genre",thisVar.state.dietary.genre)

    try {
        const res = await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.createGenre}`, payload)
        return res.data
    } catch(error) {
        console.log(error);
        alert(error)
        return {}
    }
}

function checkDietary(thisVar) {

    let anyErrors = false
    const dietary = thisVar.state.dietary
    const {
        gmoCode,
        nuts,
        onlyVegan,
        isGlutenFree
    } = dietary
    let errorValuesToUpdate = {}

    // console.log('gmoCode',dietary.gmoCode)
    // //console.log('nuts',dietary.nuts)
    // console.log('onlyVegan',dietary.onlyVegan)
    // console.log('isGlutenFree',dietary.isGlutenFree)

    if(gmoCode.length === 0 ) {
        anyErrors = true
        errorValuesToUpdate.gmoCode = true
    }

    
    if(onlyVegan === false ) {
        anyErrors = true
        errorValuesToUpdate.onlyVegan = true
    }

   
    if(isGlutenFree == -1 ) {
        anyErrors = true
        errorValuesToUpdate.isGlutenFree = true
    }
    
   
   
    if(anyErrors) {
        thisVar.updateError({...errorValuesToUpdate})
        return false
    } else {
        return true
    }
}

async function submitDietaryInfo(genreId,thisVar) {
    let payload = new URLSearchParams();
    const {
        gmoCode,
        nuts,
        onlyVegan,
        isGlutenFree
    } = thisVar.state.dietary

    payload.append("usesNuts",nuts)
    
    switch (gmoCode) {
        case "0":
            payload.append("hasGMO",true)
            payload.append("onlyGMO",false)
            break;

        case "1":
            payload.append("hasGMO",true)
            payload.append("onlyGMO",true)
            break;

        case "2":
            payload.append("hasGMO",false)
            payload.append("onlyGMO",false)
            break;

        default:
            break;
    }

    switch (onlyVegan) {
        case "0":
            payload.append("veganOptions",true)
            payload.append("onlyVegan",false)
            break;

        case "1":
            payload.append("veganOptions",true)
            payload.append("onlyVegan",true)
            break;

        case "2":
            payload.append("veganOptions",false)
            payload.append("onlyVegan",false)
            break;

        default:
            break;
    }

    switch (isGlutenFree) {
        case "0":
            payload.append("hasGF",true)
            payload.append("onlyGF",false)
            break;

        case "1":
            payload.append("hasGF",true)
            payload.append("onlyGF",true)
            break;

        case "2":
            payload.append("hasGF",false)
            payload.append("onlyGF",false)
            break;

        default:
            break;
    }

    payload.append("genreId",genreId)

    try {
        const res = await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.createDietary}`, payload)
        return res.data
    } catch(error) {
        console.log(error);
        alert(error)
        return {}
    }
}

async function submitCreateCompany(thisVar) {
    if(checkFinancial(thisVar) === false) {
        alert('Error in financial section')
        return false
    }
   
    if(checkGenre(thisVar) === false) {
        alert('Error in genre section')
        return false
    }


    if(checkDietary(thisVar) === false) {
        alert('Error in dietary section')
        return false
    }

    //If all checks pass
    const createdFinancialInfo = await submitedFinancialInfo(thisVar);
    const createdGenreInfo = await submitGenreInfo(thisVar)
    const createdDietaryInfo = await submitDietaryInfo(createdGenreInfo.data.guid,thisVar)

    // console.log('CREATED FIN',createdFinancialInfo)
    // console.log('CREATED GENRE ',createdGenreInfo)
    // console.log('CREATED DIETARY ',createdDietaryInfo)

    const financialGUID = createdFinancialInfo?.data?.guid
    const dietaryGUID = createdDietaryInfo?.data?.guid
    const userGUID = thisVar.context?.userState?.userData?.guid
    const name = thisVar.state.financial.companyName;
    // console.log({
    //     name,
    //     financialGUID,
    //     dietaryGUID,
    //     userGUID
    // })

    let payload = new URLSearchParams();
    payload.append("name",name)
    payload.append("financialInfo",financialGUID)
    payload.append("dietaryInfo",dietaryGUID)
    payload.append("userGuid",userGUID)

    try {
        const res = await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.createCompany}`, payload)
        console.log('Company created =',  res.data)

        let payload2 = new URLSearchParams();
        payload2.append("companyGuid",res.data.data.guid)
        payload2.append("userGuid",userGUID)
        const res2 =  await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.joinCompany}`, payload2)
        console.log('Joined company =',res2.data)

        // const companyguid = res2.data.data.companyGuid

        if(thisVar.state.financial.isDriver) {
            const res3 =  await axios.post(`${thisVar.context.ip}${thisVar.context.endpoints.createTruck}`, payload2)
            console.log('Created Truck = ',res3.data)
        }
     
        
        alert('Company Created! Please relog')

        const {mySettings} = screenNames.stackPages
        thisVar.props.navigation.navigate(mySettings.screenName)
    } catch(error) {
        //console.log(error);
        alert(error)
        //return {}
    }

    //console.log(this.context.userState.userData.guid)

    
}

export {
    checkFinancial,
    submitedFinancialInfo,
    checkGenre,
    submitGenreInfo,
    checkDietary,
    submitDietaryInfo,
    submitCreateCompany
}