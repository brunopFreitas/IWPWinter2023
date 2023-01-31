using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace w0448225CourseMap.Models;

[Table("Instructors")]
public class Instructor {

// Scalar Properties - Columns
    public int Id { get; set; }

    [Required]
    [Display(Name = "First Name")]
    public string? FirstName { get; set; }

    [Required]
    [Display(Name = "Last Name")]
    public string? LastName { get; set; }

// Navigation Properties

    public ICollection<AdvisingAssignment> AdvisingAssignments {get; set;} = null!;    
    public ICollection<CourseOffering> CourseOfferings {get; set;} = null!;    

}