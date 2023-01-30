using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using w0448225CourseMap.Data;
using w0448225CourseMap.Models;

namespace w0448225CourseMap.Pages_AdvisingAssignment
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
        ViewData["DiplomaYearSectionId"] = new SelectList(_context.DiplomaYearSections, "Id", "Title");


        var instructorList = _context.Instructors.ToList();
        var instructorDropdownList = new List<InstructorForDropdown>();
        instructorDropdownList.Add(new InstructorForDropdown(){
            Id=null,
            FullName="No Instructor Selected"
        });
        // Add the rest of the date looping through instructor
        instructorList.ForEach(instructor => {
            instructorDropdownList.Add(new InstructorForDropdown(){
                Id=instructor.Id,
                FullName=instructor.FirstName
            });
        });


        ViewData["InstructorId"] = new SelectList(instructorDropdownList, "Id", "FullName");
            return Page();
        }

        [BindProperty]
        public AdvisingAssignment AdvisingAssignment { get; set; } = default!;
        

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
          if (!ModelState.IsValid || _context.AdvisingAssignments == null || AdvisingAssignment == null)
            {
                return Page();
            }

            _context.AdvisingAssignments.Add(AdvisingAssignment);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}

    public class InstructorForDropdown {
        public int? Id {get; set; }
        public string? FullName { get; set; }
    }
