import styles from "styles/articlesPage.module.scss";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";
import { Vector2 } from "three";
import Link from "next/link";
import axios from "axios";
import ArticleBlock from "components/ArticleBlock";

const GalleryPage = ({ posts }) => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    const points = [
      new Vector2(0, -3), 
      new Vector2(2.5, -0.3),
      new Vector2(3.2, 1.4),
      new Vector2(0.2, 3)
    ];

    setFloaterGeometry(
      <latheGeometry args={[points, 20]} />
    );
  }, []);

  return (
    <div>
      <div className={styles.pageTitle}>Blog</div>
      <div className={styles.articleListContainer}>
        <div className={styles.articleList}>
          {posts.map((post, i) => { 
            return (
              <div key={i}>
                <Link href={post.link}>
                  <ArticleBlock article={post} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@david-r-white");
    // console.log(res.data.items[0]);

    return {
      props: {
        posts: res.data.items
      }
    };
  } catch (err) {
    console.log(`Error fetching blog posts: ${err}`);
    return {
      props: {
        posts: []
      }
    };
  }
}

export default GalleryPage;