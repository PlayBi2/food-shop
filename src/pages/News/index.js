import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import Blog from '~/component/Blog'

import TitlePage from '~/component/TitlePage'
import styles from './News.module.scss'
import data from '~/data/db.json'

const cx = classNames.bind(styles)

function News() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setBlogs(data.blogs)
    }, [])

    return (
        <>
            <TitlePage>
                Tin tức
            </TitlePage>
            <div className={cx('news')}>
                <div className='grid wide'>
                    <div className={cx('title')}>
                        Tin tức
                    </div>
                    <div className={cx('news-section')}>
                        <div className='row'>
                            {
                                blogs.map((blog, index) => {
                                    return (
                                        <div className='col c-4' key={index}>

                                            <Blog
                                                img_src={blog.img_src}
                                                date={blog.date}
                                                author={blog.author}
                                                content={blog.content}
                                                title={blog.title}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News