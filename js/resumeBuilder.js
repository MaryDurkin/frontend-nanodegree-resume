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
	var jobsLength = work.jobs.length;
	for (var i = 0; i < jobsLength; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
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
		"description" : "All the photos were taken in Iceland - these two were at the beach",
		"images" : [ "images/BigRocks.jpg", "images/footprints.jpg"]
	},
	{
		"title" : "Project 1",
		"dates" : "Sept 28 - Oct 26",
		"description" : "I'm convinced there are spirits in these rocks",
		"images" : ["images/WeirdRock1.jpg", "images/WeirdRock2.jpg", "images/WeirdRock3.jpg"]
	},
	{
		"title" : "Project 2",
		"dates" : "Oct 27 - present",
		"description" : "The wave photos are more or less obligatory aren't they?",
		"images" : [ "images/Wave1.jpg","images/Wave2.jpg"]
	}
  ]
};

projects.display = function() {
	var projectsLength = projects.projects.length;
	for (var i = 0; i < projectsLength; i++) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);
		var imagelen = projects.projects[i].images.length;
		for (var j = 0; j < imagelen; j++) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}

	}
};

var bio = {
	"name" : "Mary Walsh",
	"role" : "Aspiring Web Developer",
	"skills" : ["Web Development", "Design", "Organization"],
	"contacts" : {
		"mobile" : "610 565 5438",
		"email" : "quite.contrary@gmail.com",
		"github" : "MaryDurkin",
		"twitter" : "@dmsticdelusion",
		"location" : "Philadelphia"
	}
};

bio.display = function() {
	// topContacts not needed with the navbar in place so commented out
	//$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	//$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	//$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	//$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	//$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	if (bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);
		var skillsLength = bio.skills.length;
		for (var i = 0; i < skillsLength; i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
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

education.display = function() {
	var schoolsLength = education.schools.length;
	for (var i = 0; i < schoolsLength; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
		var formattedSchoolDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
		$(".education-entry:last").append(formattedMajor);
		var formattedURL = HTMLonlineURL.replace("%data%",education.schools[i].url);
		var formattedLinkedURL = formattedURL.replace("#",education.schools[i].url);
		$(".education-entry:last").append(formattedLinkedURL);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
		$(".education-entry:last").append(formattedLocation);
	}

	if (education.onlineCourses.length >0) {
		$("#education").append(HTMLonlineClasses);
		var onlineCoursesLength = education.onlineCourses.length;
		for (var i = 0; i < onlineCoursesLength; i++) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
			var formattedTitelonlineSchool = formattedTitle + formattedonlineSchool;
			$(".education-entry:last").append(formattedTitelonlineSchool);
			var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedURL = HTMLonlineURL.replace("%data%","Visit Website");
			var formattedLinkedURL = formattedURL.replace("#",education.onlineCourses[i].url);
			$(".education-entry:last").append(formattedLinkedURL);
		}
	}
}


var headshot = "images/TheEyeHasIt.jpg";


$("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
$("#header").prepend(HTMLheaderName.replace("%data%", bio["name"]));
$("#header").append(HTMLbioPic.replace("%data%", headshot));

// calls to the display functions
projects.display();
bio.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);

//leaving the following call in but commented out in case I need to refer to it at some point
//$("#main").append(internationalizeButton);

//smooth scroll code below is from https://css-tricks.com/snippets/jquery/smooth-scrolling/ and authored by Chris Coyer
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});






