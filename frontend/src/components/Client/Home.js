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
            profile: []
        }
    }
    async componentDidMount() {
        scrollToComponent(this.introSection, { offset: 0, align: 'middle', duration: 1000, ease:'inCirc'});
        try {
            const res = await fetch(`/api/profile/user/${this.props.match.params.id}`)
            const json = await res.json()
            this.setState({ profile: json })
        } 
        catch (err) {
            console.log(err)
        }
    }
    render(){
      const profile = this.state.profile 
    return profile.length === 0 ? 
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
                status={this.state.profile.status}
                name={`${this.state.profile.firstname} ${this.state.profile.lastname}`}
                location={this.state.profile.location}
                porfolioOnclick={()=>scrollToComponent(this.portfolioSection, { offset: 0, align: 'middle', duration: 1000 })}
                moreOnclick={() => scrollToComponent(this.aboutSection, { offset: 0, align: 'bottom', duration: 1000})}/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.aboutSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <AboutSection
                portfolioLinkDownload="../../img/pp.jpg"
                getPortfolioOnclick={()=>console.log("porfolio clicked")}
                contactOnclick={() => scrollToComponent(this.getInTouchSection, { offset: 0, align: 'middle', duration: 1000})}
            />
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.talentsSection = section; }} style={{ marginTop: "15%", marginBottom: "15%"  }}>
            <TalentsSection/>
           </section> 
           </MDBAnimation>  
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.portfolioSection = section; }} style={{ marginTop: "15%", marginBottom: "15%"  }}>
            <PortfolioSection/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.workSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <WorkSection/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.testimonialSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <TestimonialSection/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.getInTouchSection = section; }}  style={{ marginTop: "15%", marginBottom: "15%" }}> 
               <GetInTouchSection/>
           </section>
           </MDBAnimation>
           <MDBAnimation reveal type="slideInUp">
           <section ref={(section) => { this.partnershipSection = section; }} style={{ marginTop: "15%", marginBottom: "15%" }}>
            <PartnershipSection 
            />
           </section>
           </MDBAnimation>
        </>
    )
    }
}

export default Home
