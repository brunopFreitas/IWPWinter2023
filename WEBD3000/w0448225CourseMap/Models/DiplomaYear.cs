using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace w0448225CourseMap.Models;

[Table("DiplomaYears")]
public class DiplomaYear {
    // Scalar properties

    public int Id { get; set; }

    [Required]
    public string? Title { get; set; }

    [Required]
    public int DiplomaId { get; set; }

    // Navigation Properties

    [ForeignKey("DiplomaId")]
    public Diploma Diploma { get; set; } = null!;

    public ICollection<DiplomaYearSection> DiplomaYearSections {get; set;} = null!;    


}