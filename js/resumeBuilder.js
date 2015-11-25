var work = {
	'jobs' : [
	{
		'employer' : 'Mary Walsh LLC',
		'title' : 'Consultant',
		'location' : 'Philadelphia, PA',
		'dates' : 'April 2015 - Present',
		'description' : 'Organization - especially relating to technology, administration, decorative painting'
	},
	{
		'employer' : 'Paul Downs Cabinetmakers',
		'title' : 'Project Manager',
		'location' : 'Bridgeport, PA',
		'dates' : 'January 2011 - March 2015',
		'description' : 'Designed and managed production and delivery of custom built Boardroom and conference Tables'

	}]
};
work.display = function(){
	var jobsLength = work.jobs.length;
	for (var i = 0; i < jobsLength; i++) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace('%data%',work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[i].description);
		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedDescription);

	}

};


var projects = {
	'projects' : [
	{
		'title' : 'Big Rocks',
		'dates' : 'Sept 25 - 28',
		'description' : 'All the photos were taken in Iceland',
		'images' : [ 'images/BigRocks.jpg']
	},
	{
		'title' : 'Black Sand Beach',
		'dates' : 'Sept 28 - Oct 26',
		'description' : 'Never miss the chance to walk barefoot on a beach',
		'images' : ['images/footprints.jpg']
	},
	{
		'title' : 'Volcanic Rock Formations',
		'dates' : 'Oct 27 - present',
		'description' : 'There may be spirits hidden here',
		'images' : [ 'images/spiritRocks.jpg']
	},
	{
		'title' : 'Blue Wave',
		'dates' : 'Dec 2015',
		'description' : 'I\'m always fascinated by the many colors of clear water',
		'images' : [ 'images/Wave2.jpg']
	}
  ]
};

projects.display = function() {
	var projectsLength = projects.projects.length;
	for (var i = 0; i < projectsLength; i++) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%',projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace('%data%',projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%',projects.projects[i].description);
		var imagelen = projects.projects[i].images.length;
		$('.project-entry:last').append(formattedTitle)
			.append(formattedDates)
			.append(formattedDescription);
		for (var j = 0; j < imagelen; j++) {
			var formattedImage = HTMLprojectImage.replace('%data%',projects.projects[i].images[j]);
			$('.project-entry:last').append(formattedImage);
		}

	}
};

var bio = {
	'name' : 'Mary Walsh',
	'role' : 'Aspiring Web Developer',
	'contacts' : {
		'mobile' : '610 565 5438',
		'email' : 'quite.contrary@gmail.com',
		'github' : 'MaryDurkin',
		'twitter' : '@dmsticdelusion',
		'location' : 'Philadelphia'
	},
	'welcomeMessage' : '"Tell me and I forget. Teach me and I remember. Involve me and I learn" - Benjamin Franklin',
	'skills' : ['Web Development', 'Design', 'Organization'],
	'biopic' : 'images/TheEyeHasIt.jpg'
};

bio.display = function() {
	$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role))
		.prepend(HTMLheaderName.replace('%data%', bio.name))

		.append(HTMLbioPic.replace('%data%', bio.biopic));
	$('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile))
		.append(HTMLemail.replace('%data%', bio.contacts.email))
		.append(HTMLtwitter.replace('%data%', bio.contacts.twitter))
		.append(HTMLgithub.replace('%data%', bio.contacts.github))
		.append(HTMLlocation.replace('%data%', bio.contacts.location));

	if (bio.skills.length > 0 ) {
		$('#header').append(HTMLskillsStart);
		var skillsLength = bio.skills.length;
		for (var i = 0; i < skillsLength; i++) {
			var formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
	$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
};

var education = {
	'schools' : [
		{
			'name' : 'University of Sussex',
			'location' : 'Brighton, UK',
			'degree' : ['BSc'],
			'majors' : ['Computer Science'],
			'dates' : 1983,
			'url' : 'http://www.sussex.ac.uk'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Introduction to Computational Thinking 6.001x',
			'school' : 'EdEx-MIT',
			'dates' : 2015,
			'url' : 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6'
		},
		{
			'title' : 'Model Thinking',
			'school' : 'Coursera - University of Michigan',
			'dates' : 2012,
			'url' : 'https://www.coursera.org/learn/model-thinking'
		},
		{
			'title' : 'Nano Degree: Front End Web Development',
			'school' : 'Udacity',
			'dates' : 2016,
			'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]

};

education.display = function() {
	var schoolsLength = education.schools.length;
	for (var i = 0; i < schoolsLength; i++) {
		$('#education').append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%',education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
		var formattedSchoolDegree = formattedName + formattedDegree;
		var formattedDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);
		var formattedMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors);
		var formattedURL = HTMLonlineURL.replace('%data%',education.schools[i].url);
		var formattedLinkedURL = formattedURL.replace('#',education.schools[i].url);
		var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
		$('.education-entry:last').append(formattedSchoolDegree)
			.append(formattedDates)
			.append(formattedMajor)
			.append(formattedLinkedURL)
			.append(formattedLocation);
	}
	if (education.onlineCourses.length >0) {
		$('#education').append(HTMLonlineClasses);
		var onlineCoursesLength = education.onlineCourses.length;
		for (i = 0; i < onlineCoursesLength; i++) {
			$('#education').append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title);
			var formattedonlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[i].school);
			var formattedTitelonlineSchool = formattedTitle + formattedonlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[i].dates);
			var formattedOnlineURL = HTMLonlineURL.replace('%data%','Visit Website');
			var formattedOnlineLinkedURL = formattedOnlineURL.replace('#',education.onlineCourses[i].url);
			$('.education-entry:last').append(formattedTitelonlineSchool)
				.append(formattedOnlineDates)
				.append(formattedOnlineLinkedURL);
		}
	}
};

// calls to the display functions
projects.display();
bio.display();
work.display();
education.display();

$('#mapDiv').append(googleMap);

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