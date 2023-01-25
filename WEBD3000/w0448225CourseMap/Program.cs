using Microsoft.EntityFrameworkCore;
using w0448225CourseMap.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<w0448225CourseMapContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("courseMapSQLServer")));
}
else
{
    builder.Services.AddDbContext<w0448225CourseMapContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("courseMapSQLServer")));
}

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();