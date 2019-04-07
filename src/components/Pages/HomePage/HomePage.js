import React from 'react';
import Article from '../../Article/Article';

const articles = [
    {
        id: 1,
        title: 'I am title no 1',
        author: 'Jan Nowak',
        text: "1111 Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He’d waited in the tunnel’s ceiling. Sexless and inhumanly patient, his primary gratification seemed to he in his sleep, and wake alone in the coffin for Armitage’s call. He woke and found her stretched beside him in the puppet place had been a subunit of Freeside’s security system. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station."
    },
    {
        id: 2,
        title: 'I am title no 2',
        author: 'Tom Kolaski',
        text: "2222 Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He’d waited in the tunnel’s ceiling. Sexless and inhumanly patient, his primary gratification seemed to he in his sleep, and wake alone in the coffin for Armitage’s call. He woke and found her stretched beside him in the puppet place had been a subunit of Freeside’s security system."
    },
    {
        id: 3,
        title: 'I am title no 3',
        author: 'Anna Kwiatkowska',
        text: "3333 Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Molly hadn’t seen the dead girl’s face swirl like smoke, to take on the wall between the bookcases, its distorted face sagging to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. He’d waited in the tunnel’s ceiling. Sexless and inhumanly patient, his primary gratification seemed to he in his."
    },
]

const HomePage = (props) => {

    const articleList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className='home'>
            {articleList}
        </div>
    );
}

export default HomePage;