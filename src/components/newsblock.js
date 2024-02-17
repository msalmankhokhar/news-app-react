import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import NewsCard from './newscard'
import Button from 'react-bootstrap/Button'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

function fetchAsync_json(url){
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false);
    xhr.onload = ()=>{
        let responseJson = JSON.parse(xhr.responseText);
        return responseJson
    }
    xhr.send()
    return xhr.onload()
}

export default class newsblock extends Component {
    imageLink = 'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?w=900&t=st=1706945897~exp=1706946497~hmac=5de78970c3637229c8b5ff5d17c41c744b5f4152e2c9c0c2728908e3595b64ec';
    cardText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores consectetur reiciendis. Eum inventore incidunt cupiditate veniam neque culpa id';
    API_KEY = '0b9e8cd3d6e4489ab7a381b996ec0340';
    country = this.props.country;
    category = this.props.category;
    newsType = "top-headlines";
    pageSize = this.props.pageSize
    url = `https://newsapi.org/v2/${this.newsType}?country=${this.country}&category=${this.category}&apiKey=${this.API_KEY}&page=1&pageSize=${this.pageSize}`;
    // articles = fetchAsync_json(this.url)['articles']
    articles = [
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Wesley Yin-Poole",
            "title": "'Palworld Has Lost X% of Its Player Base' Discourse Is 'Lazy', Dev Says - IGN",
            "description": "The developer of Palworld has commented on the debate around the declining number of people playing the game since launch, calling it \"lazy.\"",
            "url": "https://www.ign.com/articles/palworld-has-lost-x-of-its-player-base-discourse-is-lazy-dev-says",
            "urlToImage": "https://assets-prd.ignimgs.com/2024/01/25/palworldearlyaccessreleasedatetrailer-ign-blogroll-1704822459672-1706155084682.jpg?width=1280",
            "publishedAt": "2024-02-15T09:51:45Z",
            "content": "The developer of Palworld has commented on the debate around the declining number of people playing the game since launch, calling the discourse \"lazy\".\r\nTaking to Twitter/X, Pocketpair community man… [+3563 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Insider-gaming.com"
            },
            "author": "Mike Straw",
            "title": "Details Of Microsoft Town Hall Leaked Ahead Of Xbox Announcements - Insider Gaming",
            "description": "Ahead of Microsoft's event to update on future business plans, details of an Xbox town hall have been leaked online.",
            "url": "https://insider-gaming.com/details-of-microsoft-town-hall-leaked-ahead-of-xbox-announcements/",
            "urlToImage": "https://insider-gaming.com/wp-content/uploads/2023/10/xbox_series_x_xbox_series_s.jpg",
            "publishedAt": "2024-02-15T04:30:37Z",
            "content": "Last week, with rumors circulating online regarding the future of the Xbox brand, Microsoft held a town hall to speak directly to employees about the state of the company. According to Inverse, we no… [+1278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TmoNews"
            },
            "author": "Christine Canencia",
            "title": "Report: T-Mobile Customers Discover Glitch to Unlock Unpaid Samsung Devices - TmoNews",
            "description": "There’s always a catch when you buy a new smartphone from a carrier instead of directly from the manufacturer.",
            "url": "https://www.tmonews.com/2024/02/report-t-mobile-customers-discover-glitch-to-unlock-unpaid-samsung-devices/",
            "urlToImage": "https://www.tmonews.com/wp-content/uploads/2024/02/t-mobile-locked-samsung-210x131.jpeg",
            "publishedAt": "2024-02-15T03:33:11Z",
            "content": "Theres always a catch when you buy a new smartphone from a carrier instead of directly from the manufacturer. While these phones may seem to give a discount or even offer it for free with a plan, it … [+1369 chars]"
        }
    ]

    static defaultProps = {
        pageSize : 12,
        country : 'us',
        category : 'general'
    }
    static propTypes = {
        pageSize : PropTypes.number,
        country : PropTypes.string,
        category : PropTypes.string
    }
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loading : true,
            page: 1,
            totalArticles : 0,
            hasMore : true,
        }
    }

    // totalPages = Math.ceil(this.state.totalArticles/this.pageSize)

    loadArticles = async (url)=>{
        let response = await fetch(url,{ method: "GET" });
        let parsed = await response.json();
        console.log("changing content ..")
        console.log("changed content ..")
        console.log(url)
        await this.setState({articles : parsed.articles, totalArticles : parsed.totalResults})
        await this.setState({loading : false})
    }

    async componentDidMount(){
        await this.loadArticles(this.url)
    }

    handleNextClick = async (event)=>{
        event.preventDefault()
        await this.setState({articles : []})
        await this.setState({loading : true})
        await this.setState({page : this.state.page+1 })
        if (this.state.page > Math.ceil(this.state.totalArticles/this.pageSize)) {
            this.setState({articles : [], hasMore : false})
        } else {
            await this.loadArticles(this.url.replace('page=1', `page=${this.state.page}`))
            window.scroll(0, 0);
            console.log(`page state is ${this.state.page}`)
        }
    }
    handlePrevClick = async (event)=>{
        event.preventDefault()
        if (this.state.page > 1) {
            await this.setState({articles : []})
            await this.setState({loading : true})
            await this.setState({page : this.state.page-1 })
            await this.loadArticles(this.url.replace('page=1', `page=${this.state.page}`))
            window.scroll(0, 0);
        }
        console.log(`page state is ${this.state.page}`)
    }

  render() {

    return (
        <>
        <Container className='my-5 d-flex justify-content-between align-items-center'>
            <Button disabled={true ? this.state.page === 1 : false} variant='dark' className='' onClick={this.handlePrevClick}>&larr; Previous</Button>
            <span className='pageSpan'>Page {this.state.page} of {Math.ceil(this.state.totalArticles/this.pageSize)}</span>
            <Button disabled={true ? this.state.page >= Math.ceil(this.state.totalArticles/this.pageSize) : false} variant='dark' className='' onClick={this.handleNextClick}>Next &rarr;</Button>
        </Container>
        {this.state.loading && <center><Spinner/></center>}
        <Container id='newsContainer' className='d-flex flex-row my-5 flex-wrap gap-3 justify-content-center'>
            { 
                this.state.articles.map(article => {               
                    return <NewsCard key={article.url} title={article.title} cardText={article.description} imageLink={article.urlToImage} readLink={article.url}/>
                }) 
            }       
        </Container>
        <Container className='my-5 d-flex justify-content-between align-items-center'>
            <Button disabled={true ? this.state.page === 1 : false} variant='dark' className='' onClick={this.handlePrevClick}>&larr; Previous</Button>
            <span className='pageSpan'>Page {this.state.page} of {Math.ceil(this.state.totalArticles/this.pageSize)}</span>
            <Button disabled={true ? this.state.page >= Math.ceil(this.state.totalArticles/this.pageSize) : false} variant='dark' className='' onClick={this.handleNextClick}>Next &rarr;</Button>
        </Container>
        </>
    )
  }
}
