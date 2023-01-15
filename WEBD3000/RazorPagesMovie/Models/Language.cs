using System.ComponentModel.DataAnnotations.Schema;
namespace RazorPagesMovie.Models;

[Table("Language")]
public class Language {

    // SCALAR PROPERTIES
    public int Id {get; set;}

    public string Name {get; set;}

    // NAVIGATION PROPERTIES
    public ICollection<Movie> Movies {get; set;}

}