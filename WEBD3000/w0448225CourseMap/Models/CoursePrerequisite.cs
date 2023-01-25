using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace w0448225CourseMap.Models;

[Table("CoursePrerequisites")]
public class CoursePrerequisite {

// Scalar Properties - Columns
    public int Id { get; set; }

    [Required]
    public int CourseId { get; set; }

    [Required]
    public int PrerequisiteId { get; set; }    

// Navigation Properties

    [ForeignKey("CourseId")]
    public Course Course { get; set; } = null!;    

    [ForeignKey("PrerequisiteId")]
    public Course Prerequisite { get; set; } = null!;

}