# Profile Setup Form UI

A modern, interactive profile onboarding form with form validation, password visibility toggle, progress tracking, and task checklist.

## 🎯 Features

✅ **Form Validation**

- Email validation with duplicate check
- Password strength requirement (8+ characters)
- Password confirmation matching

✅ **Password Toggle**

- Show/hide password visibility with eye icon
- Smooth transitions
- Works on both password fields

✅ **Progress Tracking**

- Visual progress circle (65% completion)
- Real-time progress updates
- Profile completeness indicator

✅ **Task Checklist**

- Multi-step onboarding tasks
- Completed/pending status
- Visual differentiation

✅ **Error Messages**

- Real-time validation feedback
- Color-coded error states
- Clear messaging

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Styling, animations, flex/grid layout
- **JavaScript (Vanilla)** - Form handling, validation, toggle functionality

_No frameworks, no dependencies - pure frontend fundamentals_

## 📂 Project Structure

```
profile-setup-form/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # JavaScript logic
└── README.md           # This file
```

## 📖 How It Works

### Password Toggle

```javascript
// Click eye icon to toggle visibility
const togglePassword = () => {
  input.type = input.type === "password" ? "text" : "password";
};
```

### Form Validation

```javascript
// Email validation
if (email.includes("@") && email.includes(".")) {
  // Valid email
}

// Password length check
if (password.length >= 8) {
  // Valid password
}
```

### Progress Update

```javascript
// Update progress based on form completion
const updateProgress = () => {
  const filled = formFields.filter((f) => f.value).length;
  progress = (filled / totalFields) * 100;
};
```

## 🎨 Design Highlights

| Component       | Details                           |
| --------------- | --------------------------------- |
| Form Layout     | Vertical stack, 300px width       |
| Input Fields    | 40px height, rounded borders      |
| Progress Circle | 65% shown, centered on right      |
| Task List       | 5-step checklist with states      |
| Buttons         | Dark buttons with hover effects   |
| Colors          | Minimalist - white, black, gray   |
| Validation      | Red error text for invalid fields |

## ✨ Key Features Breakdown

### 1. Email Validation

- Checks for valid email format
- Shows "Email is already taken" error
- Real-time feedback

### 2. Password Requirements

- Minimum 8 characters
- Visible error message
- Confirmation field matching

### 3. Password Visibility

- Eye icon for each password field
- Toggle on click
- Icon changes to indicate state

### 4. Progress Indicator

- Circular progress showing 65%
- Centered on right side
- Updates as form progresses

### 5. Task Checklist

- Create Account (completed)
- Update Roadmap Progress
- Setup Public Profile
- Complete Your first project
- Invite your Friends

```

## ♿ Accessibility Features

✅ Form labels for all inputs
✅ ARIA labels on buttons
✅ Keyboard navigation support
✅ Color contrast compliant
✅ Error messages associated with inputs


**Built with ❤️ by [marius-stack]**

Happy coding! 🚀
```
