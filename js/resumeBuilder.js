

var work = {
	"jobs" : [
	{
		"employer" : "Mary Walsh LLC",
		"title" : "Consultant",
		"location" : "Philadelphia, PA",
		"dates" : "April 2015 - Present",
		"description" : "Organization - especially relating to technology, administration, decorative painting"
	},
	{
		"employer" : "Paul Downs Cabinetmakers",
		"title" : "Project Manager",
		"location" : "Bridgeport, PA",
		"dates" : "January 2011 - March 2015",
		"description" : "Designed and managed production and delivery of custom built Boardroom and conference Tables"

	}]
};

var projects = {
	"projects" : [
	{
		"title" : "Project 0",
		"dates" : "Sept 25 - 28",
		"description" : "Introduction to me",
		"images" : [ "https://s3.amazonaws.com/accredible-api-users/images/55022/original/1443215751311?1443216125", "https://s3.amazonaws.com/accredible-api-users/images/55022/original/1443215751311?1443216125"]
	},
	{
		"title" : "Project 1",
		"dates" : "Sept 28 - Oct 26",
		"description" : "Portfolio",
		"images" : ["http://placekitten.com/200/300", "http://placekitten.com/200/300"]
	},
	{
		"title" : "Project 2",
		"dates" : "Oct 27 - present",
		"description" : "Resume",
		"images" : [ "http://placekitten.com/600/300"]
	}
  ]
};

projects.display = function(){
	for (item in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		// use similar code to displayWork function variables are title dates description images
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);
		$(".project-entry:last").append(formattedDescription);
		for (image in projects.projects[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
		// do nested loop here for project images
		//var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images);
		//$(".project-entry:last").append(formattedImages);
	}
}

var bio = {
	"name" : "Mary Walsh",
	"role" : "Aspiring Web Developer",
	"skills" : ["HTML", "css", "JavaScript", "Good Design Sense"],
	"contacts" : {
		"mobile" : "610 585 5238",
		"email" : "mary.walsh@gmail.com",
		"github" : "MaryDurkin",
		"twitter" : "@dmsticdelusion",
		"location" : "Philadelphia"
	}
};

var education = {
	"schools" : [
	{
	"name" : "University of Sussex",
	"location" : "Brighton, UK",
	"degree" : ["BSc"],
	"majors" : ["Computer Science"],
	"dates" : "1980-1983",
	"url" : "http://www.sussex.ac.uk"
	}
	],
	"onlineCourses" : [
	{
	"title" : "Introduction to Computational Thinking 6.001x",
	"school" : "EDex-MIT",
	"dates" : "Summer 2015",
	"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
	},
	{
	"title" : "Model Thinking",
	"school" : "Coursera - University of Michigan",
	"dates" : "Fall 2012",
	"url" : "https://www.coursera.org/learn/model-thinking"
	},
	{
	"title" : "Front End Web Development - Nano Degree",
	"school" : "Udacity",
	"dates" : "Fall 2015",
	"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]

};

/* not sure why this is still here - from an exercise I presume
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
*/

var headshot = "https://s3.amazonaws.com/accredible-api-users/images/55022/original/1443215751311?1443216125";
//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedHeadshot =  HTMLbioPic.replace("%data%", headshot);



$("#header").append(HTMLheaderName.replace("%data%", bio["name"]));
$("#header").append(HTMLheaderRole.replace("%data%", bio["role"]));
//$("#header").append(HTMLmobile.replace("%data%",bio.contacts[mobile]));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", headshot));




if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
};

 function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);

	};

};

// make an object that stored places lived and modify helper.js to update the map with them all

displayWork();
projects.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);



/*

function locationizer(work_obj) {
	var locations = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locations.push(newLocation);
	}
	return locations;
}

console.log(locationizer(work));

*/


// remember to formatted your contact info....




