import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Main() {
    const [User, setUser] = useState({})
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://vdev-in.herokuapp.com/user/vimal')
        .then(user => {
            setUser(user.data)
            setLoading(false)
        })
    }, [])
    console.log(User)

    return (
        <div>
            {!Loading && <div>
                <h1>{User.displayName}</h1>
                <p>{User.userdata_id.bio}</p>

                <div id="skill">
                {User.userdata_id.skills.map(skill =>{
                    return <div>{skill}</div>
                })}
                </div>


                {/* Showing Projects */}
                <h1>Projects</h1>
                <div id="project">
                {User.userdata_id.Projects.map(project =>{
                    return <div>
                        <h4>{project.ProjectName}</h4>
                        <p>{project.ProjectDetails}</p>
                        <a href={project.ProjectLink}><i class="fas fa-globe-asia"></i></a>
                    </div>
                })}
                </div>


                {/* Showing Achievements */}
                <h1>Achievements</h1>
                <div id="project">
                {User.userdata_id.Achievements.map(Achievement =>{
                    return <div>
                        <h4>{Achievement.AchievementName}</h4>
                        <p>{Achievement.AchievementDetails}</p>
                        <a href={Achievement.AchievementLink}><i class="fas fa-globe-asia"></i></a>
                    </div>
                })}
                </div>


                {/* Showing Social Media Links */}
                <h1>Social Media</h1>
                <div id="project">
                {User.userdata_id.social.map(sm =>{
                    return <div>
                        <a href={sm.smLink}> {sm.smName} <i class="fas fa-globe-asia"></i></a>
                    </div>
                })}
                </div>
            </div>}
            
        </div>
    )
}
