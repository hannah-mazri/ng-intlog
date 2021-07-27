# NgIntlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Code Structure
```
|_ pages
    |_ schedule
        |_ calendar
        |_ schedule-detail: detail of shedule on selected date
        |_ schedule-detail: show highlight of the week (optional)
        |_ drawer
```

- parent: schedule page (store data here)
- calendar receive array of schedule dates from parent
- on date click, schedule-detail receive related activity detail
- drawer receive data from parent
