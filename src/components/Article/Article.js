import React from 'react';
import '../../styles/article.css';

const Article = (props) => {
    return (
        <article>
            <h3>{props.title}</h3>
            <span>Written by {props.author}</span>
            <p>{props.text}</p>
        </article>
    );
}

export default Article;