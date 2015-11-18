

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
work.display = function(){
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

bio.display = function() {

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	if (bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
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
			"school" : "EdEx-MIT",
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
			"title" : "Nano Degree: Front End Web Development",
			"school" : "Udacity",
			"dates" : "Fall 2015",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]

};

education.display = function(){
	for (item in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[item].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[item].degree);
		var formattedSchoolDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[item].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[item].majors);
		$(".education-entry:last").append(formattedMajor);
		var formattedURL = HTMLonlineURL.replace("%data%",education.schools[item].url);
		var formattedLinkedURL = formattedURL.replace("#",education.schools[item].url);
		$(".education-entry:last").append(formattedLinkedURL);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[item].location);
		$(".education-entry:last").append(formattedLocation);
	}

	if (education.onlineCourses.length >0) {
		$("#education").append(HTMLonlineClasses);
		for (item in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[item].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[item].school);
			var formattedTitelonlineSchool = formattedTitle + formattedonlineSchool;
			$(".education-entry:last").append(formattedTitelonlineSchool);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[item].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[item].url);
			var formattedLinkedURL = formattedURL.replace("#",education.onlineCourses[item].url);
			$(".education-entry:last").append(formattedLinkedURL);
		}
	}
}




var headshot = "https://s3.amazonaws.com/accredible-api-users/images/55022/original/1443215751311?1443216125";
//var headshot = "images/fry.jpg"; use this directory and call to source your own images.


$("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
$("#header").prepend(HTMLheaderName.replace("%data%", bio["name"]));

$("#header").append(HTMLbioPic.replace("%data%", headshot));




// make an object that stored places lived and modify helper.js to update the map with them all


projects.display();
bio.display();
work.display();
education.display();




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




