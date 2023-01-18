class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web Team'
    location;
    constructor(name, location){
      super(name,location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}


class Developer extends TeamMember{
   
    designation = 'Web Course Instructor'
    team = 'Web Team'
    tech;
    constructor(name, location,tech){
      super(name,location)
      this.tech = tech;
    }
    developedFeature(feature){
        console.log(`start the support session at ${feature}`)
    }
    release(version){
        console.log(`please create quiz for module ${version}`)
    }
   
}


class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location,region){
       super(name,location)
        this.region = region;
    }
    provideResume(feature){
        console.log(`start the support session at ${feature}`)
    }
    prepareStudent(version){
        console.log(`please create quiz for module ${version}`)
    }
}

const alia = new Developer('ALia Bhatt','Dhaka','React');
console.log(alia);
alia.provideFeedback();

const tansen = new JobPlacement('Tansen','Dhaka','Bangladesh');
console.log(tansen);