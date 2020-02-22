class tabScreenData {
    constructor(screenName,title,tabColor,icon,size,color) {
        this.screenName = screenName
        this.title = title
        this.tabColor = tabColor
        this.icon = icon
        this.size = size
        this.color = color
    }
}

const myOrdersPage = new tabScreenData(
    'MyOrders',
    'My Orders',
    '#93ad4f',
    {
        focused:'food',
        unfocused:'food'
    },
    {
        focused:26,
        unfocused:20
    },
    {
        focused:'gold'
    }
)

const mapPage = new tabScreenData(
    'Map',
    'Map',
    '#694fad',
    {
        focused:'google-maps',
        unfocused:'google-maps'
    },
    {
        focused:26,
        unfocused:20
    },
    {
        focused:'dodgerblue'
    }
)

const myFavoritesPage = new tabScreenData(
    'MyFavorites',
    'Favorites',
    '#4f64ad',
    {
        focused:'heart',
        unfocused:'heart-outline'
    },
    {
        focused:26,
        unfocused:20
    },
    {
        focused:'red'
    }
)

const mySettingsPage = new tabScreenData(
    'MySettings',
    'Settings',
    '#ad4f64',
    {
        focused:'wrench',
        unfocused:'wrench'
    },
    {
        focused:26,
        unfocused:20
    },
    {
        focused:'#64ad4f'
    }
) 

class stackScreenData {
    constructor(screenName,title) {
        this.screenName = screenName
        this.title = title
        this.color = 'red'
    }
}

const mySettingsStackPage = new stackScreenData('MySettingsStack', 'My Settings');
const myFavoritesStackPage = new stackScreenData('MyFavoritesStack', 'Favorites');
const mapStackPage = new stackScreenData('MapStackPage', 'Truck Map');
const myOrdersStackPage = new stackScreenData('MyOrdersStackPage', 'My Orders');

const ScreenNames = {
    mainTabs: {
        activeColor:"white",
        inactiveColor:"grey",
        tabColor:'#694fad',
        pages:{
            myOrders:myOrdersPage,
            map:mapPage,
            myFavorites:myFavoritesPage,
            mySettings:mySettingsPage
        }

    },
    stackPages:{
        mySettings:mySettingsStackPage,
        myFavorites:myFavoritesStackPage,
        map:mapStackPage,
        myOrders:myOrdersStackPage
    }
    
};

export default ScreenNames;