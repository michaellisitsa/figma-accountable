const milestones = document.querySelector('#card--milestones');
const milestonesContainer = document.querySelector('#main-body-columns__left');
const trending = document.querySelector('#card--trending');
const trendingContainer = document.querySelector('#main-body-columns__right');
const dynamicColumn = document.querySelector('#main-body-columns__mobile');

function arrange(iPad) {
  if (iPad.matches) {
    // If media query matches
    dynamicColumn.appendChild(trending);
    dynamicColumn.appendChild(milestones);
    console.log('iPad');
  } else {
    milestonesContainer.appendChild(milestones);
    trendingContainer.appendChild(trending);
    console.log('desktop');
  }
}

var iPadMedia = window.matchMedia('(max-width: 1007px)');
arrange(iPadMedia); // Call listener function at run time
iPadMedia.addListener(arrange); // Attach listener function on state changes

var mobileMedia = window.matchMedia('(max-width: 640px)');
