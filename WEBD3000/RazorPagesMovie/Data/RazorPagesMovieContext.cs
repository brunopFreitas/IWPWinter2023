using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorPagesMovie.Models;

namespace RazorPagesMovie.Data
{
    public class RazorPagesMovieContext : DbContext
    {
        public RazorPagesMovieContext (DbContextOptions<RazorPagesMovieContext> options)
            : base(options)
        {
        }

        public DbSet<RazorPagesMovie.Models.Movie> Movie { get; set; } = default!; // This is Movie table
        public DbSet<RazorPagesMovie.Models.Language> Language { get; set;} = default!; // This is Language table
        public DbSet<RazorPagesMovie.Models.Genre> Genre { get; set;} = default!; // This is Genre table
    }
}
