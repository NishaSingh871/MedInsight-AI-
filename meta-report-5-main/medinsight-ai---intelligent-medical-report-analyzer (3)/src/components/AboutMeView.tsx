import React from 'react';
import { 
  User, 
  GraduationCap, 
  School, 
  Code2, 
  FileText, 
  Activity, 
  Printer, 
  ShieldCheck,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const AboutMeView: React.FC = () => {
  const projectFeatures = [
    {
      title: 'Lab Report Scanner (PDF & Image)',
      desc: 'Upload any diagnostic blood test report (CBC, Lipid, LFT, KFT). The system extracts patient details, test values, and units automatically.',
      icon: FileText,
    },
    {
      title: 'Clinical Reference Range Checker',
      desc: 'Compares extracted test results against standard biological reference ranges to highlight normal, borderline, and abnormal parameters.',
      icon: ShieldCheck,
    },
    {
      title: 'Patient History & Health Trends',
      desc: 'Saves reports locally in the browser and groups them by patient to compare previous test results and track health progress over time.',
      icon: Activity,
    },
    {
      title: 'Doctor Consultation Summary & Print',
      desc: 'Generates clean, printable summary reports with suggested questions for your doctor and lifestyle/dietary guidance.',
      icon: Printer,
    },
  ];

  const technologies = [
    { name: 'React 18', category: 'Frontend', desc: 'Single-page application UI' },
    { name: 'TypeScript', category: 'Language', desc: 'Type-safe clinical data models' },
    { name: 'Tailwind CSS', category: 'Styling', desc: 'Clean, responsive design' },
    { name: 'Google Gemini API', category: 'AI Engine', desc: 'Multimodal document text extraction' },
    { name: 'Lucide Icons', category: 'Icons', desc: 'Accessible healthcare iconography' },
    { name: 'Local Storage', category: 'Database', desc: 'Private offline patient records' },
  ];

  return (
    <div id="about-me-view-root" className="space-y-6 max-w-4xl mx-auto pb-16 px-1">
      {/* 1. Profile Header Card */}
      <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#232D3B] bg-white dark:bg-[#161D26] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            {/* Student Avatar */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-[#0D6E5D] text-white flex items-center justify-center font-bold text-2xl shadow-xs shrink-0">
              NS
            </div>

            {/* Student Details */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[#0D6E5D] dark:text-emerald-300 text-xs font-semibold">
                  <User className="w-3.5 h-3.5" />
                  <span>Student Developer</span>
                </span>
                <span className="text-xs font-mono font-semibold text-[#15191E] dark:text-emerald-300 bg-[#FAF8F5] dark:bg-[#0D1117] px-2.5 py-0.5 rounded-md border border-[#E6E2DA] dark:border-[#232D3B]">
                  Roll No: 266629
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#15191E] dark:text-[#F1F5F9] tracking-tight">
                Nisha Singh
              </h1>

              <div className="flex items-center gap-2 text-sm text-[#0D6E5D] dark:text-emerald-400 font-medium">
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>B.Sc. IT (Bachelor of Science in Information Technology)</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5F6B7A] dark:text-[#8E9CAE]">
                <School className="w-4 h-4 shrink-0 text-[#5F6B7A] dark:text-[#8E9CAE]" />
                <span>Karmaveer Bhaurao Patil College (KBP College), Vashi, Navi Mumbai</span>
              </div>
            </div>
          </div>

          {/* Academic Meta Box */}
          <div className="bg-[#FAF8F5] dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] rounded-xl p-4 sm:w-60 shrink-0 space-y-2 text-xs">
            <div className="text-[11px] font-bold text-[#15191E] dark:text-[#F1F5F9] pb-1 border-b border-[#E6E2DA] dark:border-[#232D3B]">
              Academic Information
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5F6B7A] dark:text-[#8E9CAE]">Department</span>
              <span className="font-semibold text-[#15191E] dark:text-[#F1F5F9]">Information Technology</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5F6B7A] dark:text-[#8E9CAE]">Academic Year</span>
              <span className="font-semibold text-[#15191E] dark:text-[#F1F5F9]">2024 - 2025</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-[#5F6B7A] dark:text-[#8E9CAE]">Location</span>
              <span className="font-semibold text-[#15191E] dark:text-[#F1F5F9]">Vashi, Navi Mumbai</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Project Overview Card */}
      <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#232D3B] bg-white dark:bg-[#161D26] p-6 sm:p-8 shadow-xs space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-[#0D6E5D] dark:text-emerald-400 uppercase tracking-wider">
            Final Year Project
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#15191E] dark:text-[#F1F5F9] tracking-tight">
            MedInsight AI — Medical Lab Report Analyzer
          </h2>
        </div>

        <p className="text-sm text-[#5F6B7A] dark:text-[#8E9CAE] leading-relaxed">
          Developed by <strong>Nisha Singh (Roll No: 266629)</strong> as a final year B.Sc. IT project at <strong>KBP College, Vashi, Navi Mumbai</strong>.
          The objective of this project is to simplify complex medical lab reports for ordinary patients. When patients receive pathology reports, they often struggle to understand technical abbreviations, reference ranges, and critical markers. MedInsight AI extracts the laboratory data, explains each parameter in simple language, highlights abnormal values, and prepares questions for doctor consultations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] space-y-1">
            <div className="text-xs font-bold text-[#15191E] dark:text-[#F1F5F9] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>The Problem</span>
            </div>
            <p className="text-xs text-[#5F6B7A] dark:text-[#8E9CAE] leading-relaxed">
              Medical test reports contain complex scientific terms and dense numbers that create confusion and anxiety for patients before they can see their doctor.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] space-y-1">
            <div className="text-xs font-bold text-[#15191E] dark:text-[#F1F5F9] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0D6E5D]"></span>
              <span>The Solution</span>
            </div>
            <p className="text-xs text-[#5F6B7A] dark:text-[#8E9CAE] leading-relaxed">
              An easy-to-use web portal that scans reports, categorizes biomarkers, explains results in plain English, and provides helpful lifestyle guidance.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Key Project Features */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-[#15191E] dark:text-[#F1F5F9] px-1">
          Key Features & Modules
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.title}
                className="rounded-xl border border-[#E6E2DA] dark:border-[#232D3B] bg-white dark:bg-[#161D26] p-5 shadow-xs space-y-2 hover:border-[#0D6E5D]/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-[#0D6E5D] dark:text-emerald-300 flex items-center justify-center border border-emerald-200/60 dark:border-emerald-800/60 shrink-0">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#15191E] dark:text-[#F1F5F9] tracking-tight">
                    {feat.title}
                  </h4>
                </div>
                <p className="text-xs text-[#5F6B7A] dark:text-[#8E9CAE] leading-relaxed pl-12">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Technologies Used */}
      <div className="rounded-2xl border border-[#E6E2DA] dark:border-[#232D3B] bg-white dark:bg-[#161D26] p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#15191E] dark:text-[#F1F5F9]">
          Technologies & Tools Used
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] space-y-1 hover:border-[#0D6E5D]/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#15191E] dark:text-[#F1F5F9]">{tech.name}</span>
                <span className="text-[10px] font-medium text-[#0D6E5D] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  {tech.category}
                </span>
              </div>
              <p className="text-[11px] text-[#5F6B7A] dark:text-[#8E9CAE]">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. College Verification Footer */}
      <div className="bg-[#FAF8F5] dark:bg-[#161D26] rounded-xl border border-[#E6E2DA] dark:border-[#232D3B] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6B7A] dark:text-[#8E9CAE]">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] flex items-center justify-center shrink-0">
            <School className="w-5 h-5 text-[#0D6E5D] dark:text-emerald-400" />
          </div>
          <div>
            <div className="font-bold text-[#15191E] dark:text-[#F1F5F9]">
              Karmaveer Bhaurao Patil College (KBP College), Vashi
            </div>
            <div className="text-[11px] text-[#5F6B7A] dark:text-[#8E9CAE]">
              Department of Information Technology • Final Year B.Sc. IT Project
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-[#0D1117] border border-[#E6E2DA] dark:border-[#232D3B] text-xs font-semibold text-[#15191E] dark:text-[#F1F5F9]">
          <span>Nisha Singh</span>
          <span>•</span>
          <span className="text-[#0D6E5D] dark:text-emerald-400 font-mono font-bold">Roll No: 266629</span>
        </div>
      </div>
    </div>
  );
};
