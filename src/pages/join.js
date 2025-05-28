import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './join.module.css';

function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    githubHandle: '',
    organization: '',
    role: '',
    membershipType: 'individual',
    interests: [],
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  // Available interests checkboxes
  const interestOptions = [
    'Foundational Ontology',
    'Domain Ontologies',
    'Ontology for AI',
    'Data Integration',
    'Semantic Interoperability',
    'Ontology Engineering',
    'Education & Training',
    'Research Collaboration',
  ];
  
  // Role options for the dropdown
  const roleOptions = [
    'Professor/Academic Researcher',
    'Industry Researcher',
    'Software Developer',
    'Data Scientist',
    'Knowledge Engineer',
    'AI Engineer',
    'Student',
    'Government/Policy Professional',
    'Healthcare Professional',
    'Business/Management',
    'Investor',
    'Open Source Program Manager',
    'Venture Capital Professional',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value),
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the issue body with all form data
      const issueBody = `
## New NCOR Membership Application

### Contact Information
- **Name:** ${formData.firstName} ${formData.lastName}
- **Email:** ${formData.email}
- **GitHub:** ${formData.githubHandle ? `@${formData.githubHandle.replace('@', '')}` : 'Not provided'}
- **Organization:** ${formData.organization || 'Not provided'}
- **Role:** ${formData.role || 'Not provided'}
- **Membership Type:** ${formData.membershipType === 'individual' ? 'Individual' : 'Organization'}

### Areas of Interest
${formData.interests.length > 0 ? formData.interests.map(interest => `- ${interest}`).join('\n') : '- None selected'}

### Additional Information
${formData.message || 'None provided'}
      `;

      // Redirect to GitHub's new issue page with pre-filled content
      const issueTitle = `Membership Application: ${formData.firstName} ${formData.lastName}`;
      const params = new URLSearchParams({
        title: issueTitle,
        body: issueBody,
        labels: 'membership-application'
      });
      
      // Store form data in session storage before redirect
      sessionStorage.setItem('formSubmissionData', JSON.stringify(formData));
      
      // Redirect to GitHub's new issue page
      window.location.href = `https://github.com/NCOR-Organization/NCOR-Network/issues/new?${params.toString()}`;

    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        error: 'There was a problem submitting your application. Please try again or contact us directly at ncornetwork@gmail.com.',
      });
      setIsSubmitting(false);
    }
  };

  // Add effect to check for successful submission after GitHub redirect
  React.useEffect(() => {
    const formData = sessionStorage.getItem('formSubmissionData');
    const urlParams = new URLSearchParams(window.location.search);
    
    if (formData && urlParams.get('issueCreated') === 'true') {
      // Clear stored data
      sessionStorage.removeItem('formSubmissionData');
      
      // Update form status
      setFormStatus({
        submitted: true,
        success: true,
        error: null
      });
      
      // Reset form
      formRef.current?.reset();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        githubHandle: '',
        organization: '',
        role: '',
        membershipType: 'individual',
        interests: [],
        message: '',
      });
    }
  }, []);
  
  const ApplicationSection = () => {
    const steps = [
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        ),
        title: 'Create Profile',
        description: 'Fill out your details and GitHub username to join our collaborative network'
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"/>
          </svg>
        ),
        title: 'Submit Application',
        description: 'Your application will be created as a GitHub issue for transparent review'
      },
      {
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
        ),
        title: 'Get Started',
        description: 'Once approved, collaborate on projects and access NCOR resources'
      }
    ];

    return (
      <div className="membership-section">
        <div className="application-header">
          <h2>Membership Application</h2>
          <p>Complete the form below to join our global network of ontology researchers and practitioners</p>
        </div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="icon-base">
                {step.icon}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <div className="info-box">
          <div className="icon-base">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div>
            <strong>Why GitHub?</strong>
            <p>NCOR uses GitHub for ontology development, documentation, and community collaboration. Your GitHub account enables:</p>
            <ul style={{marginTop: '0.5rem', marginBottom: 0}}>
              <li>Direct participation in ontology development</li>
              <li>Access to project repositories and resources</li>
              <li>Transparent application review process</li>
              <li>Collaboration with the NCOR community</li>
            </ul>
          </div>
        </div>

        <form className="application-form" ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label htmlFor="firstName">
                <strong>First Name</strong> <span className={styles.required}>*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className={styles.formInput}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <label htmlFor="lastName">
                <strong>Last Name</strong> <span className={styles.required}>*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className={styles.formInput}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className={styles.formGrid}>
            <div className={styles.formField}>
              <label htmlFor="email">
                <strong>Email Address</strong> <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <label htmlFor="githubHandle">
                <strong>GitHub Username</strong> <span className={styles.required}>*</span>
              </label>
              <input
                id="githubHandle"
                name="githubHandle"
                type="text"
                className={styles.formInput}
                value={formData.githubHandle}
                onChange={handleChange}
                placeholder="e.g. johnsmith"
                required
              />
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="organization">
              <strong>Organization</strong>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              className={styles.formInput}
              value={formData.organization}
              onChange={handleChange}
              placeholder="University, Company, or Institution"
            />
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="role">
              <strong>Role</strong> <span className={styles.required}>*</span>
            </label>
            <select
              id="role"
              name="role"
              className={styles.formSelect}
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select your role</option>
              {roleOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.formField}>
            <p><strong>Membership Type</strong> <span className={styles.required}>*</span></p>
            <div className={styles.radioGroup}>
              <div className={styles.radioOption}>
                <input
                  type="radio"
                  id="membership-individual"
                  name="membershipType"
                  value="individual"
                  checked={formData.membershipType === 'individual'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="membership-individual">
                  <span className={styles.radioButton}></span>
                  Individual Membership
                </label>
              </div>
              <div className={styles.radioOption}>
                <input
                  type="radio"
                  id="membership-organization"
                  name="membershipType"
                  value="organization"
                  checked={formData.membershipType === 'organization'}
                  onChange={handleChange}
                />
                <label htmlFor="membership-organization">
                  <span className={styles.radioButton}></span>
                  Organizational Membership
                </label>
              </div>
            </div>
          </div>
          
          <div className={styles.formField}>
            <p><strong>Areas of Interest</strong> (select all that apply)</p>
            <div className={styles.checkboxGrid}>
              {interestOptions.map(option => (
                <div key={option} className={styles.checkboxOption}>
                  <input
                    type="checkbox"
                    id={option.replace(/\s+/g, '-').toLowerCase()}
                    name="interests"
                    value={option}
                    onChange={handleCheckbox}
                    checked={formData.interests.includes(option)}
                  />
                  <label htmlFor={option.replace(/\s+/g, '-').toLowerCase()}>
                    <span className={styles.checkbox}></span>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label htmlFor="message">
              <strong>Additional Information</strong>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your background, specific interests, or how you'd like to contribute to NCOR."
            />
          </div>
          
          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const StepIcon = ({ type }) => {
    // Icon components for each step
    const icons = {
      profile: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      // ... Add other step icons ...
    };

    return icons[type] || null;
  };

  return (
    <Layout
      title="Join NCOR"
      description="Join the National Center for Ontological Research (NCOR) network to collaborate on ontology research and applications"
    >
      <div className={styles.joinHero}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h1 className={styles.heroTitle}>Join NCOR</h1>
              <div className={styles.heroLine}></div>
              <p className={styles.heroSubtitle}>
                Become part of a global network advancing ontology research and applications
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container margin-top--xl margin-bottom--xl">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsHeader}>
                <div className={styles.benefitsIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <h2>Why Join NCOR?</h2>
              </div>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <h3>Global Network</h3>
                  <p>Connect with leading researchers, industry practitioners, and government partners worldwide</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                    </svg>
                  </div>
                  <h3>Knowledge Exchange</h3>
                  <p>Access expert insights, attend specialized workshops, and participate in working groups</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <h3>Collaboration</h3>
                  <p>Find partners for research projects and funding opportunities in the ontology community</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                  </div>
                  <h3>Project Support</h3>
                  <p>Receive guidance on ontology development, methodology, and implementation challenges</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  </div>
                  <h3>Project Funding</h3>
                  <p>Submit funding proposals for projects that advance the field of applied ontology and AI alignment</p>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
                    </svg>
                  </div>
                  <h3>Project Management</h3>
                  <p>Specialized task forces to support projects in ontology, software development, and AI engineering</p>
                </div>
              </div>
            </div>
          
            {formStatus.submitted && formStatus.success ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h2>Thank You For Your Application!</h2>
                <p>
                  We've received your membership application and will be in touch soon. 
                  In the meantime, feel free to explore our resources or attend one of our upcoming events.
                </p>
                <div className={styles.successButtons}>
                  <Link 
                    to="/docs/get-started" 
                    className={styles.primaryButton}
                  >
                    Explore Resources
                  </Link>
                  <Link 
                    to="/docs/support/office-hours" 
                    className={styles.secondaryButton}
                  >
                    Upcoming Events
                  </Link>
                </div>
              </div>
            ) : (
              <ApplicationSection />
            )}
            
            <div className={styles.contactSection}>
              <h2>Contact Us</h2>
              <p>For questions about membership or to discuss potential collaboration:</p>
              
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:ncornetwork@gmail.com">ncornetwork@gmail.com</a>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Visit Us</h3>
                    <address>
                      500 Seneca Street<br/>
                      Buffalo, NY 14204<br/>
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JoinPage; 