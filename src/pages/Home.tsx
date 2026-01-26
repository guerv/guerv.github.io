import '@/App.css'
import ProjectTab from '../components/ProjectTab.tsx'
import HomeHeader from '../components/HomeHeader.tsx'
import Footer from '../components/Footer.tsx'

import {iconMap} from "../utils/icons";
import homeProjectsInfo from "../assets/projects/homepage.json";

interface Project {
    key: string;
    name: string; 
    icons:string[];
    date: string;
    gh_link?: string;
    description?: string;
    thumbnailUrl?: string;
}

function Home() {
  return (
    <>
      <HomeHeader />
      {/**Latest projects */}
      <div className='flex flex-col w-full p-10 text-left gap-y-5'>
        <h1 className='text-primary text-2xl font-semibold'>Latest Projects...</h1>
        <div className='flex flex-col md:flex-row gap-5'>
          {
            homeProjectsInfo.map( (project: Project) => (
                <ProjectTab
                    key={project.key}
                    name={project.name}
                    description={project.description}
                    thumbnailUrl={project.thumbnailUrl}
                    icons={project.icons.map((iconName:string) => iconMap[iconName])}
                    gh_link={project.gh_link}
                />
            ))
          }
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home;