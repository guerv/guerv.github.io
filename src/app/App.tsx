import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAsterisk} from '@fortawesome/free-solid-svg-icons'
import '@/App.css'

import testImg from '@/assets/projects/TEST.png'
import ProjectTab from '../components/ProjectTab.tsx'
import HomeHeader from '../components/HomeHeader.tsx'

function App() {

  const testIcons = [faGithub, faAsterisk]


  return (
    <>
      <HomeHeader />
      {/**Latest projects */}
      <div className='w-full p-5 text-left'>
        <h1 className='text-primary text-2xl font-semibold'>Latest Projects...</h1>
        <div className='flex flex-col md:flex-row gap-5'>
          <ProjectTab 
            thumbnailUrl={testImg} 
            name='Test'
            description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
            icons={testIcons}
          />
          <ProjectTab 
            thumbnailUrl={testImg} 
            name='Test'
            description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
            icons={testIcons}
          />
          <ProjectTab 
            thumbnailUrl={testImg} 
            name='Test'
            description='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'
            icons={testIcons}
          />
        </div>
      </div>

      <div>
        <ul className='text-2xl m-52'>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
        </ul>
      </div>
    </>
  )
}

export default App
