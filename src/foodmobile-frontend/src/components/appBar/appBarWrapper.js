import * as React from 'react';
import MainAppbar from './MainAppbar'

export default function AppbarWrapper(props) {
    return (
        {
            header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
                options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
    
            return (
                //Custom header to show the name of page
                <MainAppbar title={title} scene = {scene} previous = {previous} navigation={navigation}/>
            );
            },
        }
    )
}
