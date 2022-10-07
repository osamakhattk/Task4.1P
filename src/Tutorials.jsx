import React from 'react';
import './Tutorials.css'
import { Card, Image } from 'semantic-ui-react'
import tutorialList from './TutorialList';

function tutorialComponent(tutorials, i) {
    return <Card>
        <Image pic={tutorials.pic} />
        <Card.Content>
            <Card.Header header={tutorials.header} />
            <Card.Meta date={tutorials.date} />
            <Card.Description description={tutorials.description} />
        </Card.Content>
    </Card> 
}

const Tutorials = () => {
    return <div>
    {tutorialList.map(tutorialComponent)}
    </div>
}

export default Tutorials 