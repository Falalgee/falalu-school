import { useAdmissionForm } from '../hooks/useAdmissionForm';

export default function Admissions() {
  const { values, errors, handleChange, handleSubmit, submitted } = useAdmissionForm();

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-card max-w-md">
          <span className="material-symbols-outlined text-5xl text-secondary">check_circle</span>
          <h2 className="mt-4 text-2xl font-display font-bold text-primary">Application Submitted!</h2>
          <p className="mt-2 text-text-secondary">Thank you, {values.studentFirstName}. We'll be in touch within 5 business days.</p>
          <button onClick={() => window.location.reload()} className="mt-6 text-secondary font-medium hover:underline">Submit another</button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Join Us</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-primary tracking-tight">Admission Application</h1>
        <p className="mt-4 text-lg text-text-secondary">Fill in the details below to start your journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-card space-y-10">
        {/* Student Info */}
        <fieldset>
          <legend className="text-xl font-semibold text-primary mb-6">Student Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="First Name" name="studentFirstName" value={values.studentFirstName} onChange={handleChange} error={errors.studentFirstName} />
            <InputField label="Last Name" name="studentLastName" value={values.studentLastName} onChange={handleChange} error={errors.studentLastName} />
            <InputField label="Date of Birth" name="dob" type="date" value={values.dob} onChange={handleChange} error={errors.dob} />
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Gender</label>
              <select name="gender" value={values.gender} onChange={handleChange} className="w-full rounded-lg border border-border px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <InputField label="Grade Applying For" name="grade" placeholder="e.g., Primary 5" value={values.grade} onChange={handleChange} error={errors.grade} />
          </div>
        </fieldset>

        {/* Parent Info */}
        <fieldset>
          <legend className="text-xl font-semibold text-primary mb-6">Parent / Guardian</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" name="parentName" value={values.parentName} onChange={handleChange} error={errors.parentName} />
            <InputField label="Email" name="parentEmail" type="email" value={values.parentEmail} onChange={handleChange} error={errors.parentEmail} />
            <InputField label="Phone" name="parentPhone" type="tel" value={values.parentPhone} onChange={handleChange} error={errors.parentPhone} />
          </div>
        </fieldset>

        {/* Previous Education */}
        <fieldset>
          <legend className="text-xl font-semibold text-primary mb-6">Previous Education</legend>
          <InputField label="Previous School" name="prevSchool" value={values.prevSchool} onChange={handleChange} />
          <div className="mt-4">
            <InputField label="Reason for Leaving" name="reason" value={values.reason} onChange={handleChange} />
          </div>
        </fieldset>

        {/* File Upload */}
        <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
          <span className="material-symbols-outlined text-4xl text-text-muted">upload_file</span>
          <p className="mt-3 text-sm text-text-secondary">Attach birth certificate, last report card, and passport photo</p>
          <input type="file" multiple className="mt-4 block mx-auto" />
        </div>

        <button type="submit" className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
          Submit Application
        </button>
      </form>
    </section>
  );
}

function InputField({ label, name, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text-primary mb-1">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border ${error ? 'border-red-500' : 'border-border'} px-4 py-3 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}