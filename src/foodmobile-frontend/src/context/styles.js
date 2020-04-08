import { Dimensions } from 'react-native';

function genTheme(theme) {
    const primary = theme==='light'? '#b4eeb4' : '#BB00BB'
    const secondary = theme==='light'? '#908cff' : '#f9901c' 
    const tertiary = theme==='light'? '#11114e' : '#b438fb'

    return {
        truckListContainer: {
            flex: 1,
            flexWrap: 'wrap',
            width: Dimensions.get('window').width,
            backgroundColor: primary, //greyish color
        },
    }
}

export {
    genTheme
}