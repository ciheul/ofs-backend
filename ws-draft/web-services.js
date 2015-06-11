GET   /api/wells
GET   /api/substations

GET   /api/alarms/active
        ?type=<wells|substations>
        &start_date=<yyyy-MM-dd>
        &end_date=<yyyy-MM-dd>

GET   /api/alarms/historical
        ?type=<wells|substations>
        &start_date=<yyyy-MM-dd>
        &end_date=<yyyy-MM-dd>
