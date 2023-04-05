import React from 'react';
import Link from 'next/link';
import styles from "styles/articleBlock.module.scss";

const ArticleCard = ({ article }) => {
  const { thumbnail, title, description, pubDate, link } = article;
  const shortDescription = description.split("\n")[1].replace(/<[^>]*>?/gm, '');
  const published = new Date(pubDate).toLocaleDateString();

  return (
    <Link href={link}>
      <div className={styles.articleBlock}>
        <img 
          src={thumbnail}
          alt={title}
          width={180}
        />
        <div className={styles.articleInfo}>
          <div className={styles.articleTitle}>{title}</div>
          <div className={styles.description}>{shortDescription}</div>
          <div className={styles.pubDate}>Published: {published}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;