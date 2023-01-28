using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using w0448225CourseMap.Data;
using w0448225CourseMap.Models;

namespace w0448225CourseMap.Pages_DiplomaYearSection
{
    public class CreateModel : PageModel
    {
        private readonly w0448225CourseMap.Data.w0448225CourseMapContext _context;

        public CreateModel(w0448225CourseMap.Data.w0448225CourseMapContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
        ViewData["AcademicYearId"] = new SelectList(_context.AcademicYears, "Id", "Title");
        ViewData["DiplomaYearId"] = new SelectList(_context.DiplomaYears, "Id", "Title");
            return Page();
        }

        [BindProperty]
        public DiplomaYearSection DiplomaYearSection { get; set; } = default!;
        

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
          if (!ModelState.IsValid || _context.DiplomaYearSections == null || DiplomaYearSection == null)
            {
                return Page();
            }

            _context.DiplomaYearSections.Add(DiplomaYearSection);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
