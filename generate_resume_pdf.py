import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, ListFlowable, ListItem
)

def create_resume_pdf(output_path):
    # Standard 1-page margins
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,   # 0.5 inch
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette & Styles
    COLOR_PRIMARY = HexColor("#000000")
    COLOR_TEXT = HexColor("#111827")
    COLOR_MUTED = HexColor("#374151")
    COLOR_LINE = HexColor("#000000")
    
    # Styles
    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Helvetica-Bold',
        fontSize=15,
        leading=17,
        textColor=COLOR_PRIMARY,
        spaceAfter=1
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=COLOR_PRIMARY,
        spaceAfter=2
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.5,
        textColor=COLOR_MUTED,
        spaceAfter=4
    )
    
    section_heading_style = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=COLOR_PRIMARY,
        spaceBefore=4,
        spaceAfter=1
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        fontName='Helvetica',
        fontSize=7.8,
        leading=9.8,
        textColor=COLOR_TEXT,
        spaceAfter=2
    )
    
    item_header_bold = ParagraphStyle(
        'ItemHeaderBold',
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=10.2,
        textColor=COLOR_PRIMARY
    )
    
    item_header_regular = ParagraphStyle(
        'ItemHeaderRegular',
        fontName='Helvetica-Oblique',
        fontSize=7.8,
        leading=9.8,
        textColor=COLOR_MUTED
    )
    
    bullet_style = ParagraphStyle(
        'BulletText',
        fontName='Helvetica',
        fontSize=7.6,
        leading=9.4,
        textColor=COLOR_TEXT,
        leftIndent=10,
        firstLineIndent=-7,
        spaceAfter=1.5
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("ANGU ABISHEK", title_style))
    story.append(Paragraph("Electronics & AI Engineer", subtitle_style))
    contact_text = (
        "Dindigul, Tamil Nadu &nbsp;|&nbsp; 8220335091 &nbsp;|&nbsp; "
        "<a href='mailto:anguabishek183@gmail.com' color='#000000'><u>anguabishek183@gmail.com</u></a> &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/anguabishek-m' color='#000000'><u>linkedin.com/in/anguabishek-m</u></a> &nbsp;|&nbsp; "
        "<a href='https://github.com/anguabishek17' color='#000000'><u>github.com/anguabishek17</u></a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=1, color=COLOR_LINE, spaceBefore=1, spaceAfter=3))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
    summary_text = (
        "Electronics and Communication Engineering student specializing in embedded AI and full-stack development, "
        "with hands-on experience across computer vision, agentic AI, and production engineering at UNO MINDA. "
        "Proficient in Python, TensorFlow, PyTorch, React, Node.js, and embedded hardware. "
        "Seeking an Electronics and AI Engineering role to design and build intelligent, hardware-integrated systems."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=COLOR_LINE, spaceBefore=3, spaceAfter=3))

    # 3. SKILLS
    story.append(Paragraph("SKILLS", section_heading_style))
    skills = [
        ("Programming and AI/ML:", "Python, TensorFlow, PyTorch, Keras, OpenCV, Scikit-learn, MATLAB"),
        ("Web and Database:", "React.js, Node.js, Express.js, Flask, MySQL, MongoDB, Firebase, REST API, FastAPI"),
        ("Hardware and Embedded:", "Raspberry Pi, Embedded C, Microcontrollers (Arduino, ESP32), Sensor Integration, Circuit Design"),
        ("Tools and Deployment:", "Git, GitHub, VS Code, Jupyter Notebook, Docker, AWS (EC2, S3, Amplify), Render, Vercel"),
        ("Soft Skills:", "Problem Solving, Cross-Functional Collaboration, Technical Communication, Project Management, Critical Thinking, Adaptability")
    ]
    for cat, items in skills:
        p = Paragraph(f"<b>{cat}</b> {items}", body_style)
        story.append(p)
    story.append(HRFlowable(width="100%", thickness=0.6, color=COLOR_LINE, spaceBefore=3, spaceAfter=3))

    # 4. WORK EXPERIENCE
    story.append(Paragraph("WORK EXPERIENCE", section_heading_style))
    
    # UNO MINDA
    unominda_header = Table(
        [[
            Paragraph("<b>Production Development Intern</b> — UNO MINDA, Seating Division, Plant 2, Hosur", item_header_bold),
            Paragraph("2025 – Present", item_header_regular)
        ]],
        colWidths=[430, 110]
    )
    unominda_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(unominda_header)
    
    unominda_bullets = [
        "Collaborated with production and quality engineering teams to analyze end-to-end seat manufacturing workflows and identify process inefficiencies.",
        "Documented and digitized standard operating procedures for multiple production machines, improving reference accessibility and reducing manual lookup time for line technicians.",
        "Supported root-cause analysis on production line defects with quality control engineers, contributing to corrective-action discussions aimed at reducing rework and scrap rate.",
        "Gained hands-on exposure to automation and sensor-based quality inspection systems on the assembly line, assisting in evaluating their integration into existing workflows.",
        "Partnered cross-functionally with production, quality, and safety teams to present process observations and translate engineering data into actionable recommendations."
    ]
    for b in unominda_bullets:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
        
    story.append(Spacer(1, 2))

    # TITAN
    titan_header = Table(
        [[
            Paragraph("<b>CMMS – Titan Cloud — Case Maintenance Intern</b>", item_header_bold),
            Paragraph("June 2025", item_header_regular)
        ]],
        colWidths=[430, 110]
    )
    titan_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(titan_header)
    story.append(Paragraph("• &nbsp;Worked with the Computerized Maintenance Management System (Titan Cloud). Assisted in maintenance operations and record management.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=COLOR_LINE, spaceBefore=3, spaceAfter=3))

    # 5. EDUCATION
    story.append(Paragraph("EDUCATION", section_heading_style))
    edu_1 = "<b>B.E., Electronics and Communication Engineering:</b> VSB Engineering College, Karur &nbsp;|&nbsp; Sep 2024 – May 2028 &nbsp;|&nbsp; <b>CGPA: 8.54/10</b>"
    edu_2 = "<b>Higher Secondary (Class XII):</b> Sri Chaitanya Techno School, Hosur &nbsp;|&nbsp; 2023 – 2024 &nbsp;|&nbsp; <b>Score: 68.5%</b>"
    story.append(Paragraph(edu_1, body_style))
    story.append(Paragraph(edu_2, body_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=COLOR_LINE, spaceBefore=3, spaceAfter=3))

    # 6. TECHNICAL PROJECTS
    story.append(Paragraph("TECHNICAL PROJECTS", section_heading_style))
    projects = [
        ("RESTORE AI – AI-Based Image Restoration for Semiconductor Inspection:", "Designed and developed a GAN/autoencoder restoration pipeline in Python, PyTorch, TensorFlow, and OpenCV; integrated a fine-tuned SwinIR model that improved PSNR/SSIM image quality and reduced false negatives in simulated defect inspection."),
        ("MAITRI – AI-Based Physical Wellbeing Assistant for Astronauts:", "Designed an ML-based anomaly detection architecture for physiological trend monitoring using Python and TensorFlow/Scikit-learn; developed a data pipeline integrating simulated sensor input to power real-time health alerting."),
        ("SPAMSENSE AI – Agentic AI-Based Spam Mail Detection System:", "Designed and developed a multi-step agentic pipeline in Python; integrated LangChain and LLM APIs to autonomously evaluate email content and context for adaptive spam classification."),
        ("UNOMINDA – Industrial Machine Instruction Portal:", "Designed and developed a full-stack SOP portal using React.js, Node.js, and MySQL; integrated a REST API layer to replace manual instruction lookup with searchable digital access for technicians."),
        ("HOSTEL CARE – Hostel Complaint Management System:", "Designed and developed a full-stack complaint tracking application using React.js and Node.js; integrated MySQL/Firebase to digitize the complaint-to-resolution workflow for students and admins.")
    ]
    for title, desc in projects:
        story.append(Paragraph(f"• &nbsp;<b>{title}</b> {desc}", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=COLOR_LINE, spaceBefore=3, spaceAfter=3))

    # 7. CERTIFICATIONS
    story.append(Paragraph("CERTIFICATIONS", section_heading_style))
    certs = [
        "AWS Certified Cloud Practitioner — Amazon Web Services, 2025",
        "TensorFlow Developer Certificate — Google/TensorFlow, 2025",
        "NPTEL – Embedded Systems Design — IIT (NPTEL), 2025"
    ]
    for c in certs:
        story.append(Paragraph(f"• &nbsp;{c}", bullet_style))

    doc.build(story)
    print(f"PDF successfully generated at: {output_path}")

if __name__ == '__main__':
    public_dir = os.path.join(os.path.dirname(__file__), 'public')
    os.makedirs(public_dir, exist_ok=True)
    pdf_path = os.path.join(public_dir, 'resume.pdf')
    create_resume_pdf(pdf_path)
    
    # Also save a named copy for direct downloads
    named_pdf_path = os.path.join(public_dir, 'ANGU_ABISHEK_RESUME.pdf')
    create_resume_pdf(named_pdf_path)
