using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        public DbSet<catCharge> catCharge { get; set; }
        public DbSet<TransportRequestInfor> TransportRequestInfor { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TransportRequestInfor>(entity =>
            {
                entity.ToTable("TransportRequestInfor");

                entity.Property(e => e.RefNo);


                entity.Property(e => e.PlaceFrom);


                entity.Property(e => e.PlaceTo);

                entity.Property(e => e.DriverName);


                entity.Property(e => e.ExcutionDate);


                entity.Property(e => e.LicensePlate);

                modelBuilder.Query<TransportRequestInfor>();
            });
        }
    }
}
