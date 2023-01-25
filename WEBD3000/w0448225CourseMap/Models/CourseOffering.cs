using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace w0448225CourseMap.Models;

[Table("CourseOfferings")]
public class CourseOffering {

// Scalar Properties - Columns
    public int Id { get; set; }

    [Required]
    public int? CourseId { get; set; }

    public int? InstructorId { get; set; }

    [Required]
    public int? DiplomaYearSectionId { get; set; }

    [Required]
    public int? SemesterId { get; set; }

    [Required]
    public Boolean? IsDirectedElective { get; set; } = false!;

// Navigation Properties

    [ForeignKey("CourseId")]
    public ICollection<Course>? Course {get; set;}

    [ForeignKey("InstructorId")]
    public ICollection<Instructor>? Instructor {get; set;}

    [ForeignKey("DiplomaYearSectionId")]
    public ICollection<DiplomaYearSection>? DiplomaYearSection {get; set;}

    [ForeignKey("SemesterId")]
    public ICollection<Semester>? Semester {get; set;}

}