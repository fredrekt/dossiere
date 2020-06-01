import React, { Component } from 'react'
import AboutSection from './sections/AboutSection'
import IntroSection from './sections/IntroSection'
import TalentsSection from './sections/TalentsSection'
import WorkSection from './sections/WorkSection'
import PortfolioSection from './sections/PortfolioSection'
import TestimonialSection from './sections/TestimonialSection'
import PartnershipSection from './sections/PartnershipSection'
import scrollToComponent from 'react-scroll-to-component';
import { MDBAnimation } from 'mdbreact'
import GetInTouchSection from './sections/GetInTouchSection'
import Lottie from 'lottie-react-web'
import portfolioGenerate from '../../img/coding-loading.json'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            portfolio: []
        }
    }
    async componentDidMount() {
        scrollToComponent(this.introSection, { offset: 0, align: 'middle', duration: 1000, ease:'inCirc'});
        try {
            const res = await fetch(`/api/profile/user/${this.props.match.params.id}`)
            const resPortfolio = await fetch(`/api/portfolios/${this.props.match.params.id}`)
            
            const ppJson = await resPortfolio.json()
            const json = await res.json()
            this.setState({ profile: json, portfolio: ppJson })
        } 
        catch (err) {
            console.log(err)
        }
    }
    render(){
      const profile = this.state.profile
      const portfolio = this.state.portfolio
    return profile.length === 0 && portfolio.length === 0 ? 
    <div style={{ marginTop: '10%' }}>
        <Lottie 
            options={{
                animationData: portfolioGenerate
            }}
            width="25%"
            height="25%"
        />
        <div style={{ marginTop: "0" }} className="text-center grey-text">
            This will take a second, fetching data to generate digital portfolio...
      </div>
    </div> 
    : 
    (
        <>
           <MDBAnimation type="slideInUp">
           <section ref={(section) => { this.introSection = section; }}>
           <IntroSection 
                status={profile.status}
                name={`${profile.firstname} ${profile.lastname}`}
                location={profile.location}
                dailyHobby={portfolio.dailyHobby}
                porfolioOnclick={()=>scrollToComponent(this.portfolioSection, { offset: 0, align: 'middle', duration: 1000 })}
                moreOnclick={() => scrollToComponent(this.aboutSection, { offset: 0, align: 'bottom', duration: 1000})}/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.aboutSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <AboutSection
                whatYouDo={portfolio.whatYouDo}
                whyHireMe={portfolio.whyHireMe}
                portfolioLinkDownload="../../img/pp.jpg"
                getPortfolioOnclick={()=>console.log("porfolio clicked")}
                contactOnclick={() => scrollToComponent(this.getInTouchSection, { offset: 0, align: 'middle', duration: 1000})}
            />
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.talentsSection = section; }} style={{ marginTop: "15%", marginBottom: "15%"  }}>
            <TalentsSection
                skills={portfolio.selectedSkills}
            />
           </section> 
           </MDBAnimation>  
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.portfolioSection = section; }} style={{ marginTop: "15%", marginBottom: "15%"  }}>
            <PortfolioSection/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.workSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <WorkSection
                projectsCompleted={portfolio.projectsCompleted}
                happyClients={portfolio.happyClients}
            />
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.testimonialSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <TestimonialSection
                data={portfolio.testimonials}
            />
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.getInTouchSection = section; }}  style={{ marginTop: "15%", marginBottom: "15%" }}> 
               <GetInTouchSection
                    userID={this.props.match.params.id}
                    workEmail={profile.email}
               />
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.partnershipSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <PartnershipSection 
                sponsors={portfolio.sponsors}
            />
           </section>
           </MDBAnimation>
        </>
    )
    }
}

export default Home
