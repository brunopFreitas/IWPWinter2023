using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace w0448225CourseMap.Migrations
{
    /// <inheritdoc />
    public partial class CreateTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AcademicYears",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AcademicYears", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CourseOfferings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    InstructorId = table.Column<int>(type: "int", nullable: true),
                    DiplomaYearSectionId = table.Column<int>(type: "int", nullable: false),
                    SemesterId = table.Column<int>(type: "int", nullable: false),
                    IsDirectedElective = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseOfferings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Diplomas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diplomas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Instructors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Instructors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Semesters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    StartDate = table.Column<DateTime>(type: "Date", nullable: false),
                    EndDate = table.Column<DateTime>(type: "Date", nullable: false),
                    AcademicYearId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Semesters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CourseCourseOffering",
                columns: table => new
                {
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    CourseId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseCourseOffering", x => new { x.CourseId, x.CourseId1 });
                    table.ForeignKey(
                        name: "FK_CourseCourseOffering_CourseOfferings_CourseId",
                        column: x => x.CourseId,
                        principalTable: "CourseOfferings",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseCourseOffering_Courses_CourseId1",
                        column: x => x.CourseId1,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoursePrerequisites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    PrerequisiteId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursePrerequisites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoursePrerequisites_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CoursePrerequisites_Courses_PrerequisiteId",
                        column: x => x.PrerequisiteId,
                        principalTable: "Courses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DiplomaYears",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiplomaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiplomaYears", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiplomaYears_Diplomas_DiplomaId",
                        column: x => x.DiplomaId,
                        principalTable: "Diplomas",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CourseOfferingInstructor",
                columns: table => new
                {
                    InstructorId = table.Column<int>(type: "int", nullable: false),
                    InstructorId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseOfferingInstructor", x => new { x.InstructorId, x.InstructorId1 });
                    table.ForeignKey(
                        name: "FK_CourseOfferingInstructor_CourseOfferings_InstructorId",
                        column: x => x.InstructorId,
                        principalTable: "CourseOfferings",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseOfferingInstructor_Instructors_InstructorId1",
                        column: x => x.InstructorId1,
                        principalTable: "Instructors",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AcademicYearSemester",
                columns: table => new
                {
                    AcademicYearId = table.Column<int>(type: "int", nullable: false),
                    AcademicYearId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AcademicYearSemester", x => new { x.AcademicYearId, x.AcademicYearId1 });
                    table.ForeignKey(
                        name: "FK_AcademicYearSemester_AcademicYears_AcademicYearId1",
                        column: x => x.AcademicYearId1,
                        principalTable: "AcademicYears",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AcademicYearSemester_Semesters_AcademicYearId",
                        column: x => x.AcademicYearId,
                        principalTable: "Semesters",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CourseOfferingSemester",
                columns: table => new
                {
                    SemesterId = table.Column<int>(type: "int", nullable: false),
                    SemesterId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseOfferingSemester", x => new { x.SemesterId, x.SemesterId1 });
                    table.ForeignKey(
                        name: "FK_CourseOfferingSemester_CourseOfferings_SemesterId",
                        column: x => x.SemesterId,
                        principalTable: "CourseOfferings",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseOfferingSemester_Semesters_SemesterId1",
                        column: x => x.SemesterId1,
                        principalTable: "Semesters",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "DiplomaYearSections",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiplomaYearId = table.Column<int>(type: "int", nullable: false),
                    AcademicYearId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiplomaYearSections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DiplomaYearSections_AcademicYears_AcademicYearId",
                        column: x => x.AcademicYearId,
                        principalTable: "AcademicYears",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_DiplomaYearSections_DiplomaYears_DiplomaYearId",
                        column: x => x.DiplomaYearId,
                        principalTable: "DiplomaYears",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AdvisingAssignments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InstructorId = table.Column<int>(type: "int", nullable: false),
                    DiplomaYearSectionId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdvisingAssignments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AdvisingAssignments_DiplomaYearSections_DiplomaYearSectionId",
                        column: x => x.DiplomaYearSectionId,
                        principalTable: "DiplomaYearSections",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AdvisingAssignments_Instructors_InstructorId",
                        column: x => x.InstructorId,
                        principalTable: "Instructors",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CourseOfferingDiplomaYearSection",
                columns: table => new
                {
                    DiplomaYearSectionId = table.Column<int>(type: "int", nullable: false),
                    DiplomaYearSectionId1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseOfferingDiplomaYearSection", x => new { x.DiplomaYearSectionId, x.DiplomaYearSectionId1 });
                    table.ForeignKey(
                        name: "FK_CourseOfferingDiplomaYearSection_CourseOfferings_DiplomaYearSectionId",
                        column: x => x.DiplomaYearSectionId,
                        principalTable: "CourseOfferings",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CourseOfferingDiplomaYearSection_DiplomaYearSections_DiplomaYearSectionId1",
                        column: x => x.DiplomaYearSectionId1,
                        principalTable: "DiplomaYearSections",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AcademicYears_Title",
                table: "AcademicYears",
                column: "Title",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AcademicYearSemester_AcademicYearId1",
                table: "AcademicYearSemester",
                column: "AcademicYearId1");

            migrationBuilder.CreateIndex(
                name: "IX_AdvisingAssignments_DiplomaYearSectionId",
                table: "AdvisingAssignments",
                column: "DiplomaYearSectionId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AdvisingAssignments_InstructorId",
                table: "AdvisingAssignments",
                column: "InstructorId");

            migrationBuilder.CreateIndex(
                name: "IX_CourseCourseOffering_CourseId1",
                table: "CourseCourseOffering",
                column: "CourseId1");

            migrationBuilder.CreateIndex(
                name: "IX_CourseOfferingDiplomaYearSection_DiplomaYearSectionId1",
                table: "CourseOfferingDiplomaYearSection",
                column: "DiplomaYearSectionId1");

            migrationBuilder.CreateIndex(
                name: "IX_CourseOfferingInstructor_InstructorId1",
                table: "CourseOfferingInstructor",
                column: "InstructorId1");

            migrationBuilder.CreateIndex(
                name: "IX_CourseOfferingSemester_SemesterId1",
                table: "CourseOfferingSemester",
                column: "SemesterId1");

            migrationBuilder.CreateIndex(
                name: "IX_CoursePrerequisites_CourseId",
                table: "CoursePrerequisites",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursePrerequisites_PrerequisiteId",
                table: "CoursePrerequisites",
                column: "PrerequisiteId");

            migrationBuilder.CreateIndex(
                name: "IX_Courses_Title",
                table: "Courses",
                column: "Title",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Diplomas_Title",
                table: "Diplomas",
                column: "Title",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DiplomaYears_DiplomaId",
                table: "DiplomaYears",
                column: "DiplomaId");

            migrationBuilder.CreateIndex(
                name: "IX_DiplomaYearSections_AcademicYearId",
                table: "DiplomaYearSections",
                column: "AcademicYearId");

            migrationBuilder.CreateIndex(
                name: "IX_DiplomaYearSections_DiplomaYearId",
                table: "DiplomaYearSections",
                column: "DiplomaYearId");

            migrationBuilder.CreateIndex(
                name: "IX_Semesters_Name",
                table: "Semesters",
                column: "Name",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AcademicYearSemester");

            migrationBuilder.DropTable(
                name: "AdvisingAssignments");

            migrationBuilder.DropTable(
                name: "CourseCourseOffering");

            migrationBuilder.DropTable(
                name: "CourseOfferingDiplomaYearSection");

            migrationBuilder.DropTable(
                name: "CourseOfferingInstructor");

            migrationBuilder.DropTable(
                name: "CourseOfferingSemester");

            migrationBuilder.DropTable(
                name: "CoursePrerequisites");

            migrationBuilder.DropTable(
                name: "DiplomaYearSections");

            migrationBuilder.DropTable(
                name: "Instructors");

            migrationBuilder.DropTable(
                name: "CourseOfferings");

            migrationBuilder.DropTable(
                name: "Semesters");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "AcademicYears");

            migrationBuilder.DropTable(
                name: "DiplomaYears");

            migrationBuilder.DropTable(
                name: "Diplomas");
        }
    }
}
