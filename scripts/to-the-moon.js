
const kmsToSuperMoon = 363300 // shortest distance to sun, according to https://www.space.com/18145-how-far-is-the-moon.html
const kmsToEclipsedMoon = 405500 // longest distance to sun, according to https://www.space.com/18145-how-far-is-the-moon.html
const walkingPaceInKmsPerHour = 5.4
const daysBetweenFullMoons = 29.53059 // see: https://eclipse.gsfc.nasa.gov/SEhelp/moonorbit.html#:~:text=The%20mean%20length%20of%20the,in%20orbit%20around%20the%20Sun.
const hrsBetweenFullMoons = daysBetweenFullMoons * 24
const moonsToSupermoon = kmsToSuperMoon / walkingPaceInKmsPerHour / hrsBetweenFullMoons
const moonsToEclipsedMoon = kmsToEclipsedMoon / walkingPaceInKmsPerHour / hrsBetweenFullMoons

document.getElementById('walking-pace-in-kms').innerText = walkingPaceInKmsPerHour.toLocaleString()
document.getElementById('moons-to-supermoon').innerText = Math.round(moonsToSupermoon)
document.getElementById('moons-to-eclipsed-moon').innerText = Math.round(moonsToEclipsedMoon)
;