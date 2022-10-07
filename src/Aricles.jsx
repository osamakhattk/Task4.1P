import React from "react";
import "./Articles.css"
import { Card, Image } from 'semantic-ui-react'
import articleList from "./ArticleList";

function articleComponent (articles , i) {
    return <Card>
        <Image pic={articles.pic} />
        <Card.Content>
            <Card.Header header={articles.header} />
            <Card.Meta date={articles.date} />
            <Card.Description description={articles.description} />
        </Card.Content>
    </Card>
} 


const Articles = () => {
    return <div>
    {articleList.map(articleComponent)}
    </div>
}

export default Articles