---
title: "OMP Timezone Fix"
summary: "My first fix to an open-source project. The usage dashboard in **OMP**, the coding agent I use every day, grouped days by UTC, so in Pacific time anything after 5 PM showed up on the next day. I worked with an agent to find the cause and fixed it to use the **local calendar day**, with tests that run across **six timezones**, including one where daylight saving skips midnight."
url: "https://github.com/GarrettShrop/oh-my-pi/tree/fix/stats-local-day-buckets"
tags: ["Open Source", "TypeScript", "Bun", "SQLite", "Testing"]
order: 10
featured: true
---
