package com.devsuperior.dsmovie.crontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieServices;

@RestController
@RequestMapping(value = "/sortName")
public class MovieControllerSortByName {
	
	@Autowired
	private MovieServices service;
		
	@GetMapping
	public Page<MovieDTO> findAllSortedByName( Pageable pageable) {
		return service.findAllSortedByName(pageable);
	}
	
}
