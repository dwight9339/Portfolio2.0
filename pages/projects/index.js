import ProjectBlock from "./ProjectBlock";
import Head from "next/head";
import fsPromises from 'fs/promises';
import path from 'path';
import { 
  projectsListContainer,
  projectsList  
} from "styles/projectsPage.module.scss";
import { ThreejsContext } from "components/Layout";
import { useContext, useEffect } from "react";

const ProjectsPage = ({ projects }) => {
  const { setFloaterGeometry } = useContext(ThreejsContext);

  useEffect(() => {
    setFloaterGeometry(
      <torusGeometry args={[2.5, 1, 12, 20]} />
    );
  }, []);

  return (
    <div className={projectsListContainer}>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={projectsList}>
        {projects.map((project, i) => {
          return <ProjectBlock key={i} project={project} />
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const dataFilePath = path.join(process.cwd(), "/pages/projects/projects.json");
  const rawData = await fsPromises.readFile(dataFilePath);
  const projects = JSON.parse(rawData);

  return {
    props: {
      projects
    }
  }
}

export default ProjectsPage;