﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportRequestInforsController : ControllerBase
    {
        private readonly DataContext _context;
        public TransportRequestInforsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TransportRequestInfors
        [HttpGet]
        [Obsolete]
        public async Task<ActionResult<IEnumerable<TransportRequestInfor>>> GetTransportRequestInfor()
        {

            //return await _context.TransportRequestInfor.ToListAsync();
            List<TransportRequestInfor> lst = new List<TransportRequestInfor>();
            try
            {
                SqlParameter refNo = new SqlParameter("@Code", "00000500/0720/DVR-VNBDG");
                string sqlQuery = "EXEC Get_Infor_TransportRequest " + "@Code";
                lst = await _context.Query<TransportRequestInfor>().FromSql(sqlQuery, refNo).ToListAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
            return lst;
        }

        // GET: api/TransportRequestInfors/5
        [HttpGet("{id}")]
        public  ActionResult<TransportRequestInfor> GetTransportRequestInfor(string id)
        {
            //List<TransportRequestInfor> lst = new List<TransportRequestInfor>();
            //try
            //{
            //    SqlParameter refNo = new SqlParameter("@Code", id);
            //    string sqlQuery = "EXEC Get_Infor_TransportRequest " + "@Code";
            //    lst = await _context.Query<TransportRequestInfor>().FromSql(sqlQuery, refNo).ToListAsync();
            //}
            //catch (Exception e)
            //{
            //    throw e;
            //}
            //return lst;
            var transportRequestInfor =  _context.TransportRequestInfor.FromSqlRaw("Exec Get_Infor_TransportRequest @Code = {0}", id);

            //var transportRequestInfor = await _context.TransportRequestInfor.FindAsync(id);

            //if (transportRequestInfor == null)
            //{
            //    return NotFound();
            //}

            return transportRequestInfor;
        }

        // PUT: api/TransportRequestInfors/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransportRequestInfor(string id, TransportRequestInfor transportRequestInfor)
        {
            if (id != transportRequestInfor.ID)
            {
                return BadRequest();
            }

            _context.Entry(transportRequestInfor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransportRequestInforExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TransportRequestInfors
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TransportRequestInfor>> PostTransportRequestInfor(TransportRequestInfor transportRequestInfor)
        {
            _context.TransportRequestInfor.Add(transportRequestInfor);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TransportRequestInforExists(transportRequestInfor.ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTransportRequestInfor", new { id = transportRequestInfor.ID }, transportRequestInfor);
        }

        // DELETE: api/TransportRequestInfors/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TransportRequestInfor>> DeleteTransportRequestInfor(string id)
        {
            var transportRequestInfor = await _context.TransportRequestInfor.FindAsync(id);
            if (transportRequestInfor == null)
            {
                return NotFound();
            }

            _context.TransportRequestInfor.Remove(transportRequestInfor);
            await _context.SaveChangesAsync();

            return transportRequestInfor;
        }

        private bool TransportRequestInforExists(string id)
        {
            return _context.TransportRequestInfor.Any(e => e.ID == id);
        }
    }
}
