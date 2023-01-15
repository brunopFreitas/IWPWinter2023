using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace RazorPagesMovie.Models;

[Table("Genre")]
public class Genre {

    public int Id {get; set;}

    [RegularExpression(@"^[A-Z]+[a-zA-Z\s]*$")]
    [Required]
    [StringLength(30)]
    public string Name { get; set; } = string.Empty;

    public ICollection<Movie> Movies {get; set;}

}