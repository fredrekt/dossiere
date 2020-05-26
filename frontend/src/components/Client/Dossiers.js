import React, { useEffect } from 'react'
import UserProfiles from './UserProfiles'
import { MDBContainer, MDBRow } from 'mdbreact'
import karen from '../../img/karen.jpg'
import Breadcrumbs from '../Breadcrumbs'
import Slide from 'react-reveal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllProfiles } from '../../actions/profile'
import Lottie from 'lottie-react-web'
import loadingProfiles from '../../img/paper-boat-loading.json'

const Profiles = ({ getAllProfiles, profile: { profile, loading } }) => {

    useEffect(()=>{
        getAllProfiles()
    }, [loading])

    const sampleData = [
    {
        user: {
            _id: 'fred23812'
        },
        firstname: "fred ",
        lastname: 'garingo',
        location: 'Talisay City',
        email: 'fred@gmail.com'
    },
    {
        user: {
            _id: '123141412'
        },
        firstname: 'karen',
        lastname: 'corporal',
        profileImage: karen,
        location: 'dipolog City',
        status: 'Banana seller',
        bio: 'I live to annoy fredrick john garingo and me myself and I and i also like to drink milk tea and reddoorz.',
        email: 'karen@gmail.com'
    },
    {
        user: {
            _id: '1712312asher'
        },
        firstname: "asher",
        lastname: "millstone",
        profileImage: 'https://pbs.twimg.com/profile_images/536116264012615681/yqQPTg7u.jpeg',
        location: 'New Orleans',
        status: 'professional actor',
        email: 'lawyer@htgawm.com'
    },
    {
        firstname: 'joey',
        lastname: 'tribianni',
        profileImage: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-matt-leblanc.jpg',
        location: 'New York, USA',
        status: 'freelance comedian'
    },
    {
        firstname: "tom",
        lastname: "cruise",
        profileImage: 'data:image/jpeg;base64,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',
        location: 'Syracuse new york, usa',
        status: 'professional stuntman',
        bio: 'I am the highest paid actor in the universe and which makes me successful in life.',
        email: 'tomcruise@gmail.com'
    },
    {
        firstname: 'Frank',
        lastname: 'Delfino',
        profileImage: 'https://cdn1.edgedatg.com/aws/v2/abc/HowtoGetAwayWithMurder/person/822544/72b499f07da1a8f7b661b4d43ffb65cb/579x579-Q90_72b499f07da1a8f7b661b4d43ffb65cb.jpg',
        status: 'hitman  agent 47',
        bio: 'I will always protect & be loyal to annalise keating because i killed his son. I killed many people and i killed as many as one two and three and four.'    
    }
    ]
    return loading || profile === null ? 
    <>
      <Lottie
        options={{
            animationData: loadingProfiles
        }}
        width="35%"
        height="35%"
      />  
      <div style={{ marginTop: "0" }} className="text-center grey-text">
        Don't worry this wont take long, we'll get there in a few!
      </div>
    </> :  (
        <>
        <Slide cascade slide bottom>
            <div style={{ marginBottom: '10%' }}> 
                <Breadcrumbs
                    bcrumbs_color="white"
                    bcrumbs_header="Dossier Profiles"
                    bcrumbs_current="Profiles"
                />
                <hr style={{ marginTop:'-2%' }} className="mb-4" width="10%"/>
                <p className="text-center w-responsive mx-auto mb-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
                </p>
            </div>
            </Slide>
            <UserProfiles profiles={profile === null ? sampleData : profile}/>
        </>
    )
}

Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(Profiles)
