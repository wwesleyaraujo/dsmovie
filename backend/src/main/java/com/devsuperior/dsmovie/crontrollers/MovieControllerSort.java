package com.devsuperior.dsmovie.crontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.IdGenerator;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.services.MovieServices;

@RestController
@RequestMapping(value = "/sort")
public class MovieControllerSort {
	
	@Autowired
	private MovieServices service;
		
	@GetMapping
	public Page<MovieDTO> findAllSorted(Pageable pageable) {
		return service.findAllSorted(pageable);
		
	}
}
