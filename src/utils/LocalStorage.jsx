const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Verify the stock levels for fresh produce.",
        date: "2025-01-10",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Clean Station",
        description: "Ensure the counter and utensils are clean.",
        date: "2025-01-10",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Customer Order",
        description: "Handle order #1234 for Table 5.",
        date: "2025-01-10",
        category: "Service",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Ingredients",
        description: "Chop vegetables for the lunch service.",
        date: "2025-01-10",
        category: "Preparation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Train New Staff",
        description: "Guide the new kitchen helper on protocols.",
        date: "2025-01-10",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Equipment Check",
        description: "Test the functionality of the oven.",
        date: "2025-01-10",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Staff Briefing",
        description: "Attend the daily meeting with management.",
        date: "2025-01-10",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Handle Complaint",
        description: "Address customer feedback about order #5678.",
        date: "2025-01-10",
        category: "Service",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Order",
        description: "Package order #789 for delivery.",
        date: "2025-01-10",
        category: "Delivery",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Inventory Update",
        description: "Log new inventory items into the system.",
        date: "2025-01-10",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Assist Chef",
        description: "Support the head chef during peak hours.",
        date: "2025-01-10",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Clean Kitchen",
        description: "Deep clean the kitchen area after closing.",
        date: "2025-01-10",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Quality Check",
        description: "Inspect food quality before serving.",
        date: "2025-01-10",
        category: "Quality Assurance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin);
}