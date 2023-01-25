using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace w0448225CourseMap.Models;

[Index(nameof(Course.Title), IsUnique = true)]
[Table("Courses")]
public class Course {

// Scalar Properties - Columns
    public int Id { get; set; }

    [Required]
    public string? CourseCode { get; set; }

    [Required]
    public string? Title { get; set; }    

// Navigation Properties

    public ICollection<CoursePrerequisite>? Prerequisites {get; set;}  

    public ICollection<CoursePrerequisite>? IsPrerequisiteFor {get; set;}   

    public ICollection<CourseOffering> CourseOfferings {get; set;} = null!;   

}