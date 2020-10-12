// Basic config
var calendar = new Calendar("calendarContainer", "small",
                            [ "Monday", 3 ],
                            [ "#ffc107", "#ffa000", "#ffffff", "#ffecb3" ],
                            {
                                days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday" ],
                                months: [ "January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                indicator: false,
                                placeholder: "<span>Custom Placeholder</span>"
                            });

var data = {
            2017: {
                12: {
                    25: [
                        {
                            startTime: "00:00",
                            endTime: "24:00",
                            text: "Christmas Day"
                        }
                    ]
                }
            }
        };

var organizer = new Organizer("organizerContainer", calendar, data);