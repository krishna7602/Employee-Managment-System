export const setlocalstorage = () => {
    const employees = [
    {
        "Id": 1,
        "firstname": "Rajesh",
        "name": "Rajesh Sharma",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the sales report for Q3 2024.",
                "taskDate": "2024-12-28",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Follow-up",
                "taskDescription": "Follow up with Client X for project updates.",
                "taskDate": "2024-12-15",
                "category": "Communication"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 2,
        "firstname": "Priya",
        "name": "Priya Kapoor",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Website Content",
                "taskDescription": "Revise the About Us section on the company website.",
                "taskDate": "2024-12-29",
                "category": "Web Development"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Database Backup",
                "taskDescription": "Ensure the database is backed up for December.",
                "taskDate": "2024-12-20",
                "category": "Database Management"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting Preparation",
                "taskDescription": "Prepare slides for the upcoming team meeting.",
                "taskDate": "2024-12-30",
                "category": "Administrative"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "Id": 3,
        "firstname": "Ankit",
        "name": "Ankit Verma",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit Expense Report",
                "taskDescription": "Submit the expense report for travel expenses.",
                "taskDate": "2024-12-25",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Presentation",
                "taskDescription": "Create and deliver a presentation for Client Y.",
                "taskDate": "2024-12-31",
                "category": "Presentation"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 4,
        "firstname": "Sneha",
        "name": "Sneha Mishra",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the code submitted by the development team.",
                "taskDate": "2024-12-28",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve bugs reported in Module A.",
                "taskDate": "2024-12-27",
                "category": "Testing"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "Id": 5,
        "firstname": "Kunal",
        "name": "Kunal Singh",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Conduct research on industry trends for 2025.",
                "taskDate": "2024-12-28",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Social Media Update",
                "taskDescription": "Post updates on LinkedIn and Twitter.",
                "taskDate": "2024-12-20",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Product Launch",
                "taskDescription": "Coordinate the product launch event.",
                "taskDate": "2024-12-22",
                "category": "Event Management"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
];

const admin = {
    "Id": 1,
    "firstname": "Amit",
    "name": "Amit Gupta",
    "email": "admin@me.com",
    "password": "123"
};

    

    // Save to local storage
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
};







