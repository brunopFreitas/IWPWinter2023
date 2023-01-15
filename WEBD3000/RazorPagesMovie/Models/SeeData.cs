#define Rating
#if Rating
#region snippet_1 
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RazorPagesMovie.Data;
using System;
using System.Linq;

namespace RazorPagesMovie.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new RazorPagesMovieContext(
                serviceProvider.GetRequiredService<DbContextOptions<RazorPagesMovieContext>>()))
            {
                if (context == null || context.Movie == null || context.Language == null || context.Genre == null)
                {
                    throw new ArgumentNullException("Null RazorPagesMovieContext");
                }

                // Look for any movies and Languages
                if (context.Movie.Any() && context.Language.Any() && context.Genre.Any())
                {
                    return;   // DB has been seeded
                }

                context.Genre.AddRange(
                    new Genre {
                        Name = "Romantic Comedy"
                    },
                    new Genre {
                        Name = "Comedy"
                    },
                    new Genre {
                        Name = "Western"
                    }
                );

                context.Language.AddRange(
                    new Language {
                        Name = "English"
                    },
                    new Language {
                        Name = "French"
                    },
                    new Language {
                        Name = "Portuguese"
                    },
                    new Language {
                        Name = "Korean"
                    }
                );

                #region snippet1
                context.Movie.AddRange(
                    new Movie
                    {
                        Title = "When Harry Met Sally",
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        GenreID = 1,
                        Price = 7.99M,
                        Rating = "R",
                        LangID = 1
                    },
                #endregion

                    new Movie
                    {
                        Title = "Ghostbusters ",
                        ReleaseDate = DateTime.Parse("1984-3-13"),
                        GenreID = 2,
                        Price = 8.99M,
                        Rating = "G",
                        LangID = 1
                    },

                    new Movie
                    {
                        Title = "Ghostbusters 2",
                        ReleaseDate = DateTime.Parse("1986-2-23"),
                        GenreID = 2,
                        Price = 9.99M,
                        Rating = "G",
                        LangID = 1
                    },

                    new Movie
                    {
                        Title = "Rio Bravo",
                        ReleaseDate = DateTime.Parse("1959-4-15"),
                        GenreID = 3,
                        Price = 3.99M,
                        Rating = "NA",
                        LangID = 1
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
#endregion
#endif